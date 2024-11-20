import * as fs from 'fs';
import * as path from 'path';

/**
 * Function to get the current settings from settings.json
 * @returns {object} The current settings object
 * @throws Will throw an error if the file cannot be read or parsed
 */
export function getCurrentSettings(): object {
    const settingsFilePath = path.resolve(__dirname, 'settings.json'); // Adjust the path if necessary

    try {
        const rawData = fs.readFileSync(settingsFilePath, 'utf8'); // Read the file
        const parsedData = JSON.parse(rawData); // Parse the JSON data

        // Return only the "settings" object from the JSON
        if (parsedData && parsedData.settings) {
            return parsedData.settings;
        } else {
            throw new Error('Invalid JSON structure: "settings" key not found.');
        }
    } catch (error) {
        console.error('Error reading or parsing settings.json:', error);
        throw error; // Re-throw the error to signal the caller about the issue
    }
}
