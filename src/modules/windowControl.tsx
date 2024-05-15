import { ipcRenderer } from 'electron';

export function closeWindow() {
    ipcRenderer.send('close-window');
}
