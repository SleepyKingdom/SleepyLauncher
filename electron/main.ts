import { app, BrowserWindow, ipcMain, } from 'electron';
import { fileURLToPath } from 'node:url';
import Store from 'electron-store';
import path from 'path';
import fs from 'fs';



import { loginWithMicrosoft } from './auth/microsoftAuth.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const store = new Store();

// asfdubhnsjuhdfb
let contextBridge;
let ipcRenderer;

async function loadElectron() {
  const electron = await import('electron');
  contextBridge = electron.contextBridge;
  ipcRenderer = electron.ipcRenderer;
}

(async () => {
  await loadElectron();
  process.env.APP_ROOT = path.join(__dirname, "..");
  const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
  // continue setup...
})();

// Directory paths and server URLs
process.env.APP_ROOT = path.join(__dirname, '..');
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron');
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    title: 'SleepyLauncher',
    resizable: false,
    icon: path.join(process.env.VITE_PUBLIC, 'launcherIcon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: true, // Set to false in production
      contextIsolation: false, // Set to true in production
      devTools: true // Set to false in production
    }
  });

  // Send a message to the renderer process once the window is loaded
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  // Load URL based on environment
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'));
  }
}

// Window controls
ipcMain.on('minimize-window', () => win?.minimize());
ipcMain.on('toggle-fullscreen', () => win?.setFullScreen(!win?.isFullScreen()));
ipcMain.on('quit-app', () => {
  app.quit();
  win = null;
});

// Quit the application when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Settings file path
const settingsPath = path.join(app.getPath('userData'), 'settings.json');

// Load settings from the file
ipcMain.on('load-settings', (event) => {
  if (fs.existsSync(settingsPath)) {
    const data = fs.readFileSync(settingsPath, 'utf-8');
    event.returnValue = JSON.parse(data);
  } else {
    event.returnValue = {
      autostart: false,
      minimizeOnStart: false,
      third: false
    };
  }
});

contextBridge.exposeInMainWorld('electronAPI', {
  loginWithMicrosoft: () => ipcRenderer.invoke('login-microsoft')
});

ipcMain.handle('login-microsoft', async () => {
  try {
    const tokenData = await loginWithMicrosoft();
    store.set('auth', tokenData);
    return { success: true, profile: tokenData };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
});

// Save settings to the file
ipcMain.on('save-settings', (_event, settings) => {
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), 'utf-8');
});

// Initialize the app when ready
app.whenReady().then(createWindow);
