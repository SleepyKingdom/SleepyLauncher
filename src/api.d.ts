export interface API {
  loginWithMicrosoft: () => Promise<void>;
  getSettings: () => Promise<any>;
  setSetting: (key: string, value: any) => Promise<void>;
  chooseLauncherPath: () => Promise<void>;
  logout: () => void;
}

declare global {
  interface Window {
    api: API;
  }
}
