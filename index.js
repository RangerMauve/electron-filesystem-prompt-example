const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
  const window = new BrowserWindow()

  const index = path.join(__dirname, 'index.html')

  window.loadFile(index)

  window.webContents.openDevTools()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
