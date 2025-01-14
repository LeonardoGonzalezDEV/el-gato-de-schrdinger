const { app, BrowserWindow } = require('electron'); 

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Establecer el tamaño mínimo de la ventana
    mainWindow.setMinimumSize(1024, 768);

    mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        });

        // Establecer el tamaño mínimo de la ventana
        mainWindow.setMinimumSize(800, 600);

        mainWindow.loadFile('index.html');
    }
});
