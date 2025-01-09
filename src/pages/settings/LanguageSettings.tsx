import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getLanguageText } from '../../functions/getLanguageText';

const LanguageSettings = () => {
    const { language, setLanguage } = useLanguage(); // Access global language state

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value); // Update global state and settings.json
    };

    // Define language labels dynamically
    const languageOptions = [
        { label: getLanguageText(language, "settings.language.en"), code: 'en' },
        { label: getLanguageText(language, "settings.language.de"), code: 'de' },
        { label: getLanguageText(language, "settings.language.fr"), code: 'fr' },
        { label: getLanguageText(language, "settings.language.sp"), code: 'es' },
        { label: getLanguageText(language, "settings.language.it"), code: 'it' },
    ];

    console.log(getLanguageText(language, "settings.language.title2"))

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">{getLanguageText(language, "settings.language.title2")}</h1>

            {/* Language Selection */}
            <div className="space-y-4">
                {languageOptions.map(({ label, code }) => (
                    <div key={code} className="flex items-center bg-gray-700 p-4 rounded-md">
                        <label htmlFor={code} className="flex items-center space-x-3 cursor-pointer">
                            <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                                {language === code && (
                                    <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                                )}
                            </span>
                            <span className="text-gray-200 text-lg">{label}</span>
                            <input
                                type="radio"
                                id={code}
                                name="language"
                                value={code}
                                checked={language === code}
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
