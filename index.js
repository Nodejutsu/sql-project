const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow()
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})
