import React, { useEffect, useState } from 'react';

type Settings = {
  minecraftLauncherPath: string;
  theme: 'light' | 'dark' | 'auto';
  accentColor: string;
  enable2FA: boolean;
};

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    window.api.getSettings().then(setSettings);
  }, []);

  const updateSetting = (key: keyof Settings, value: any) => {
    if (!settings) return;
    const newSettings = { ...settings, [key]: value };
    window.api.setSetting(key, value);
    setSettings(newSettings);
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block font-bold">Minecraft Launcher Pfad</label>
        <input
          type="text"
          value={settings.minecraftLauncherPath}
          readOnly
          className="border p-2 w-full"
        />
        <button className="mt-2 px-4 py-1 bg-gray-200" onClick={() => window.api.chooseLauncherPath()}>Pfad wählen</button>
      </div>
      <div>
        <label>Theme</label>
        <select value={settings.theme} onChange={e => updateSetting('theme', e.target.value as any)}>
          <option value="light">Hell</option>
          <option value="dark">Dunkel</option>
          <option value="auto">Auto</option>
        </select>
      </div>
      <div>
        <label>Primärfarbe</label>
        <input type="color" value={settings.accentColor} onChange={e => updateSetting('accentColor', e.target.value)} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={settings.enable2FA} onChange={e => updateSetting('enable2FA', e.target.checked)} />
          2FA aktivieren
        </label>
      </div>
      <button className="px-4 py-2 bg-red-500 text-white" onClick={() => {
        window.api.logout();
      }}>Überall abmelden</button>
    </div>
  );
};

export default SettingsPage;
