import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSettings, updateSettings } from '../functions/getSettings'; // Adjust the path as needed

// Define the context type
interface LanguageContextType {
    language: string;
    setLanguage: (language: string) => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<string>('en');

    useEffect(() => {
        // Load initial language from settings
        const savedLanguage = getSettings('language');
        setLanguageState(savedLanguage || 'en');
    }, []);

    const setLanguage = (newLanguage: string) => {
        setLanguageState(newLanguage);
        updateSettings({ language: newLanguage }); // Save to settings.json
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook to use the Language Context
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
