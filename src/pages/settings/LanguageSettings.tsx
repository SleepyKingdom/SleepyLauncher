import { useEffect, useState } from 'react';
import { getCurrentSettings, updateSettings } from '../../functions/getSettings';

// Map display names to language codes
const LANGUAGE_MAP: { [key: string]: string } = {
    English: 'en',
    German: 'de',
    French: 'fr',
    Spanish: 'es',
    Italian: 'it',
};

const REVERSE_LANGUAGE_MAP: { [key: string]: string } = Object.fromEntries(
    Object.entries(LANGUAGE_MAP).map(([name, code]) => [code, name])
);

const LanguageSettings = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    // Load initial language setting from settings.json
    useEffect(() => {
        try {
            const currentSettings = getCurrentSettings();
            const languageCode = currentSettings.language || 'en';
            setSelectedLanguage(REVERSE_LANGUAGE_MAP[languageCode] || 'English'); // Map code to display name
        } catch (error) {
            console.error('Error reading language setting:', error);
        }
    }, []);

    // Handle language change
    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const displayLanguage = e.target.value;
        const languageCode = LANGUAGE_MAP[displayLanguage];

        setSelectedLanguage(displayLanguage);

        // Update settings.json with the language code
        updateSettings({ language: languageCode });
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">Language Settings</h1>

            {/* Language Selection */}
            <div className="space-y-4">
                {Object.keys(LANGUAGE_MAP).map((language) => (
                    <div key={language} className="flex items-center bg-gray-700 p-4 rounded-md">
                        <label
                            htmlFor={language.toLowerCase()}
                            className="flex items-center space-x-3 cursor-pointer"
                        >
                            <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                                {selectedLanguage === language && (
                                    <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                                )}
                            </span>
                            <span className="text-gray-200 text-lg">{language}</span>
                            <input
                                type="radio"
                                id={language.toLowerCase()}
                                name="language"
                                value={language}
                                checked={selectedLanguage === language}
                                onChange={handleLanguageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LanguageSettings;
