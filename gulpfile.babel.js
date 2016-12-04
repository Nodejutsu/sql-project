import browserify   from 'browserify'
import buffer       from 'vinyl-buffer'
import electron     from 'electron-connect'
import gulp         from 'gulp'
import merge        from 'merge-stream'
import plugins      from 'gulp-load-plugins'
import source       from 'vinyl-source-stream'
import watchify     from 'watchify'

/**
 * Secret jutsu copied from Google Starter Kit
 * It allows to call gulp-suffixed package with $ as a shortcut
 * @see https://www.npmjs.com/package/gulp-load-plugins
 */
const $ = plugins()

const server = electron.server.create()

/**
 * Copy resources from versionned folders to public folders
 */
gulp.task('copy', () => {
  const images = gulp.src('app/front/images/**/*')
    .pipe(gulp.dest('public/images/'))

  const fonts = gulp.src('app/front/fonts/**/*')
    .pipe(gulp.dest('public/fonts/'))

  const mockups = gulp.src('app/front/mockups/**/*')
    .pipe(gulp.dest('public/'))

  return merge(images, fonts, mockups)
})

// Styles ------------------------------------------------------------------------------------------
/**
 * Compile style assets, using scss preprocessing and minification
 */
gulp.task('styles', () => gulp.src('./app/front/styles/main.sass')
  .pipe($.sourcemaps.init())
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.sourcemaps.write())
  .pipe($.rename('main.min.css'))
  .pipe(gulp.dest('./public/styles/'))
)

// JS ----------------------------------------------------------------------------------------------
/**
 * Entry points
 */
const entries = ['libs.js', 'main.js']

/**
 * Output a file using browserify
 * @param  {BrowserifyInstance} instance
 * @return {Stream} stream
 */
const bundle = function(instance) {
  return instance
    .bundle()
    .on('error', (err) => $.util.log(err.stack))
    .pipe(source(instance._options.entries))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/scripts/'))
    .on('end', () => server.reload())
}

const streams = entries.map((entry) => {
  const options = {
    basedir:      'app/front/scripts/',
    cache:        {},
    debug:        true,
    entries:      entry,
    packageCache: {},
    // paths:        ['./app/front/'], // TODO find a way to make that sh*t work
    transform:    ['babelify']
  }
  let instance = watchify(browserify(options))

  instance.on('update', () => {
    bundle(instance)
  })

  return bundle(instance)
})

const buildJS = function() {
  return merge.apply(merge, streams)
}

gulp.task('scripts', buildJS)

// Watch -------------------------------------------------------------------------------------------
gulp.task('watch', () => {
  server.start()                                              // Start browser process
  gulp.watch(['app/back/**/*', '*.js'], server.restart)       // Restart browser process
  // gulp.watch('app/front/scripts/**/*.js', ['scripts', server.reload]) // Reload renderer process
  gulp.watch('app/front/styles/**/*.sass', ['styles', server.reload])     // Reload renderer process
})

gulp.task('build', ['scripts', 'styles', 'copy'])
gulp.task('default', ['watch', 'build'])
