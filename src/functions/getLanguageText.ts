//getLanguageText.ts
import * as fs from 'fs';
import * as path from 'path';

type NestedStrings = { [key: string]: string | NestedStrings };

interface LanguageFile {
    language: {
        [key: string]: NestedStrings; // Each language can have nested keys of strings
    };
}

let cachedLanguageFile: LanguageFile | null = null; // Cache to store the parsed language file

function loadLanguageFile(): LanguageFile {
    if (cachedLanguageFile) {
        return cachedLanguageFile; // Return cached data if available
    }

    const languageFilePath = path.resolve(__dirname, '../data/language.json'); // Adjust the path if necessary

    try {
        const rawData = fs.readFileSync(languageFilePath, 'utf8'); // Read the file
        cachedLanguageFile = JSON.parse(rawData) as LanguageFile; // Parse and cache the JSON data
        return cachedLanguageFile;
    } catch (error) {
        console.error('Error reading or parsing language.json:', error);
        throw error; // Re-throw the error to signal the caller about the issue
    }
}

export function getLanguageText(language: string, path: string): string {
    const languageData = loadLanguageFile(); // Use cached or freshly loaded data

    if (!languageData.language || !languageData.language[language]) {
        throw new Error(`Language "${language}" not found in the language file.`);
    }

    const languageContent = languageData.language[language];
    const pathParts = path.split('.'); // Split the dot-separated path into parts

    // Traverse the object to resolve the path
    let current: string | NestedStrings = languageContent;
    for (const part of pathParts) {
        if (typeof current === 'object' && part in current) {
            current = current[part] as string | NestedStrings;
        } else {
            throw new Error(`Path "${path}" not found for language "${language}".`);
        }
    }

    if (typeof current === 'string') {
        return current; // Return the final value if it's a string
    }

    throw new Error(`Path "${path}" did not resolve to a string.`);
}
