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
        "en": {
            "pages": {
                "kingdomsrisepage": {
                    "overviewtext": "You can explore custom-generated worlds filled with new mobs, challenging dungeons, and powerful bosses. With immersive exploration and cooperative multiplayer options, KingdomsRise offers a fresh take on Minecraft, blending traditional sandbox gameplay with a structured RPG adventure.",
                    "requirementstext": "KingdomsRise requires a modern PC with a decent graphics card, 8 GB RAM, and at least 10 GB of free disk space. Ensure your system is up-to-date with the latest Java runtime and a installed copy of Minecraft. <br />Also link your Microsoft account {'(with a valid minecraft license)'} via settings {'->'} connected accounts"
                }
            },
            "navigation": {
                "settings": "Settings"
            },
            "universal": {
                "buttons": {
                    "playbutton": "Play"
                },
                "headers": {
                    "version": "Version",
                    "overviewheader": "Game Overview",
                    "requirementsheader": "System Requirements"
                }
            },
            "settings": {
                "language": {
                    "title": "Language",
                    "title2": "Language Settings",
                    "en": "English",
                    "de": "German",
                    "fr": "French",
                    "sp": "Spanish",
                    "it": "Italian"
                },
                "account": {
                    "title": "Account",
                    "account": {
                        "title": "My Account",
                        "dname": "Display Name",
                        "uname": "User Name",
                        "email": "Email",
                        "mobile": "Phone Number",
                        "editprofile": "Edit Profile",
                        "passwordcng": "Change Password"
                    },
                    "connected": {
                        "title": "Connected Accounts",
                        "dc": "Connected as",
                        "ms": "Connected to your Microsoft account",
                        "connect": "Connect",
                        "disconnect": "Disconnect"
                    }
                },
                "client": {
                    "title": "Client Settings",
                    "title2": "Client",
                    "general": {
                        "title": "General Settings",
                        "client": "Client Settings",
                        "dwnld": "Game Download Location",
                        "mcexe": "Minecraft.exe Location"
                    },
                    "appearance": {
                        "title": "Appearance",
                        "title2": "Appearance Settings",
                        "theme": "Theme",
                        "dark": "Dark",
                        "light": "Light"

                    },
                    "security": {
                        "title": "Security",
                        "title2": "Security Settings",
                        "session": "Session Management",
                        "logout": "Force Logout Everywhere",
                        "2fa": "Two-Factor Authentication (2FA)",
                        "mobile": "Enable via Mobile",
                        "email": "Enable via Email",
                        "authapp": "Enable via Authenticatior App"
                    },
                    "web": {
                        "title": "Web",
                        "title2": "Web Settings",
                        "attention": "Attention",
                        "leave": "You are about to leave SleepyLauncher and open the Webpage of SleepyKingdom.",
                        "continue": "Open Browser"
                    }

                }
            }
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
