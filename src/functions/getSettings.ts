//getSettings.ts
import * as fs from 'fs';
import * as path from 'path';

interface Settings {
    language: string;
    autostart: boolean;
    theme: boolean;
    minimizeOnStart: boolean;
}

let cachedSettings: Settings | null = null; // Cache to store the parsed settings

function loadSettings(): Settings {
    if (cachedSettings) {
        return cachedSettings; // Return cached data if available
    }

    const settingsFilePath = path.resolve(__dirname, '../data/settings.json'); // Adjust the path if necessary

    try {
        const rawData = fs.readFileSync(settingsFilePath, 'utf8'); // Read the file
        const parsedData = JSON.parse(rawData); // Parse the JSON data

        if (parsedData && parsedData.settings) {
            cachedSettings = parsedData.settings as Settings; // Cache the settings
            return cachedSettings;
        } else {
            throw new Error('Invalid JSON structure: "settings" key not found.');
        }
    } catch (error) {
        console.error('Error reading or parsing settings.json:', error);
        throw error; // Re-throw the error to signal the caller about the issue
    }
}

export function getCurrentSettings(): Settings {
    return loadSettings();
}

export function getSettings<K extends keyof Settings>(key: K): Settings[K] {
    const settings = loadSettings(); // Use the cached or freshly loaded settings
    if (key in settings) {
        return settings[key]; // Type-safe access
    } else {
        throw new Error(`Setting "${key}" not found.`);
    }
}
