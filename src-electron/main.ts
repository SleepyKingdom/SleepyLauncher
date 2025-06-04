import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { join } from 'path';
import Store from 'electron-store';
import { installModpack } from './modpackInstaller';
import { spawn } from 'child_process';

const isDev = !app.isPackaged;

const store = new Store();

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    }
  });

  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(join(__dirname, '../index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC handlers
ipcMain.handle('login-ms', async () => {
  // TODO: implement Microsoft login using device code flow
  return { username: 'test' };
});

ipcMain.handle('get-settings', () => {
  return store.get('settings');
});

ipcMain.handle('set-setting', (_e, key: string, value: any) => {
  store.set(`settings.${key}`, value);
});

ipcMain.handle('choose-launcher-path', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openFile'] });
  if (!result.canceled && result.filePaths.length > 0) {
    store.set('settings.minecraftLauncherPath', result.filePaths[0]);
  }
});

ipcMain.handle('install-modpack', async () => {
  return installModpack();
});

ipcMain.handle('start-game', async () => {
  const settings = store.get('settings') as any;
  const username = store.get('auth.username') as string;
  const gameDir = join(app.getPath('appData'), '.sleepy', 'sleepylauncher', 'kingdomsrise', 'game');
  spawn(settings.minecraftLauncherPath, [`--gameDir=${gameDir}`, '--username', username], { detached: true });
});

ipcMain.handle('logout', () => {
  store.delete('auth');
});
