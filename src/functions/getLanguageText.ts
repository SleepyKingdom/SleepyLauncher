import * as fs from 'fs';
import * as path from 'path';
import os from 'os';

type NestedStrings = { [key: string]: string | NestedStrings };

interface LanguageFile {
    language: {
        [key: string]: NestedStrings; // Nested language strings
    };
}

const DEFAULT_LANGUAGE_FILE: LanguageFile = {
    language: {
        en: {
            pages: {
                kingdomsrisepage: {
                    overviewtext: "Default overview text",
                    requirementstext: "Default requirements text",
                },
            },
            universal: {
                buttons: {
                    playbutton: "Play",
                },
                headers: {
                    version: "Version",
                    overviewheader: "Game Overview",
                    requirementsheader: "System Requirements",
                },
            },
        },
    },
};

let cachedLanguageFile: LanguageFile | null = null;

// Get the correct base directory for the language file based on OS
function getConfigPath(): string {
    const baseDir =
        process.platform === "win32"
            ? path.join(process.env.APPDATA || "", "sleepy", "SleepyLauncher")
            : path.join(os.homedir(), ".sleepy", "SleepyLauncher");
    return path.join(baseDir, "languageSettings.json");
}

function ensureLanguageFile(): string {
    const languageFilePath = getConfigPath();
    const dirPath = path.dirname(languageFilePath);

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Ensure the file exists with default language content
    if (!fs.existsSync(languageFilePath)) {
        fs.writeFileSync(languageFilePath, JSON.stringify(DEFAULT_LANGUAGE_FILE, null, 4), "utf8");
        console.log(`Created default language file at: ${languageFilePath}`);
    }

    return languageFilePath;
}

function loadLanguageFile(): LanguageFile {
    if (cachedLanguageFile) {
        return cachedLanguageFile;
    }

    const languageFilePath = ensureLanguageFile();

    try {
        const rawData = fs.readFileSync(languageFilePath, "utf8");
        cachedLanguageFile = JSON.parse(rawData) as LanguageFile;
        return cachedLanguageFile;
    } catch (error) {
        console.error('Error reading or parsing languageSettings.json:', error);
        throw error;
    }
}

export function getLanguageText(language: string, path: string): string {
    const languageData = loadLanguageFile();

    if (!languageData.language || !languageData.language[language]) {
        throw new Error(`Language "${language}" not found in the language file.`);
    }

    const languageContent = languageData.language[language];
    const pathParts = path.split('.');

    let current: string | NestedStrings = languageContent;
    for (const part of pathParts) {
        if (typeof current === 'object' && part in current) {
            current = current[part] as string | NestedStrings;
        } else {
            throw new Error(`Path "${path}" not found for language "${language}".`);
        }
    }

    if (typeof current === 'string') {
        return current;
    }

    throw new Error(`Path "${path}" did not resolve to a string.`);
}
