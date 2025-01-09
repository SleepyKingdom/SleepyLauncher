import * as fs from 'fs';
import * as path from 'path';
import os from 'os';

interface Settings {
    language: string;
    autostart: boolean;
    theme: boolean;
    minimizeOnStart: boolean;
}

const DEFAULT_SETTINGS: Settings = {
    language: "en",
    autostart: true,
    theme: false,
    minimizeOnStart: false,
};

let cachedSettings: Settings | null = null;

// Get the correct base directory for settings based on OS
function getConfigPath(): string {
    const baseDir =
        process.platform === "win32"
            ? path.join(process.env.APPDATA || "", "sleepy", "SleepyLauncher")
            : path.join(os.homedir(), ".sleepy", "SleepyLauncher");
    return path.join(baseDir, "settings.json");
}

function ensureConfigFile(): string {
    const settingsFilePath = getConfigPath();
    const dirPath = path.dirname(settingsFilePath);

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Ensure the file exists with default settings
    if (!fs.existsSync(settingsFilePath)) {
        fs.writeFileSync(settingsFilePath, JSON.stringify({ settings: DEFAULT_SETTINGS }, null, 4), "utf8");
        console.log(`Created default settings at: ${settingsFilePath}`);
    }

    return settingsFilePath;
}

function loadSettings(): Settings {
    if (cachedSettings) {
        return cachedSettings;
    }

    const settingsFilePath = ensureConfigFile();

    try {
        const rawData = fs.readFileSync(settingsFilePath, "utf8");
        const parsedData = JSON.parse(rawData);

        if (parsedData && parsedData.settings) {
            cachedSettings = parsedData.settings as Settings;
            return cachedSettings;
        } else {
            throw new Error('Invalid JSON structure: "settings" key not found.');
        }
    } catch (error) {
        console.error('Error reading or parsing settings.json:', error);
        throw error;
    }
}

export function getCurrentSettings(): Settings {
    return loadSettings();
}

export function getSettings<K extends keyof Settings>(key: K): Settings[K] {
    const settings = loadSettings();
    if (key in settings) {
        return settings[key];
    } else {
        throw new Error(`Setting "${key}" not found.`);
    }
}
