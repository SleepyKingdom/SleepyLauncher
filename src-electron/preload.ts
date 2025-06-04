import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  loginWithMicrosoft: () => ipcRenderer.invoke('login-ms'),
  getSettings: () => ipcRenderer.invoke('get-settings'),
  setSetting: (key: string, value: any) => ipcRenderer.invoke('set-setting', key, value),
  chooseLauncherPath: () => ipcRenderer.invoke('choose-launcher-path'),
  installModpack: () => ipcRenderer.invoke('install-modpack'),
  startGame: () => ipcRenderer.invoke('start-game'),
  logout: () => ipcRenderer.invoke('logout'),
});
