import { useState } from 'react';

const LanguageSettings = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLanguage(e.target.value);
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">Language Settings</h1>

            {/* Language Selection */}
            <div className="space-y-4">
                {/* Language Option: English */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label htmlFor="english" className="flex items-center space-x-3 cursor-pointer">
                        <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                            {selectedLanguage === 'English' && (
                                <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                            )}
                        </span>
                        <span className="text-gray-200 text-lg">English</span>
                        <input
                            type="radio"
                            id="english"
                            name="language"
                            value="English"
                            checked={selectedLanguage === 'English'}
                            onChange={handleLanguageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Language Option: German */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label htmlFor="german" className="flex items-center space-x-3 cursor-pointer">
                        <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                            {selectedLanguage === 'German' && (
                                <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                            )}
                        </span>
                        <span className="text-gray-200 text-lg">German</span>
                        <input
                            type="radio"
                            id="german"
                            name="language"
                            value="German"
                            checked={selectedLanguage === 'German'}
                            onChange={handleLanguageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Language Option: French */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label htmlFor="french" className="flex items-center space-x-3 cursor-pointer">
                        <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                            {selectedLanguage === 'French' && (
                                <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                            )}
                        </span>
                        <span className="text-gray-200 text-lg">French</span>
                        <input
                            type="radio"
                            id="french"
                            name="language"
                            value="French"
                            checked={selectedLanguage === 'French'}
                            onChange={handleLanguageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Language Option: Spanish */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label htmlFor="spanish" className="flex items-center space-x-3 cursor-pointer">
                        <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                            {selectedLanguage === 'Spanish' && (
                                <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                            )}
                        </span>
                        <span className="text-gray-200 text-lg">Spanish</span>
                        <input
                            type="radio"
                            id="spanish"
                            name="language"
                            value="Spanish"
                            checked={selectedLanguage === 'Spanish'}
                            onChange={handleLanguageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Language Option: Italian */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label htmlFor="italian" className="flex items-center space-x-3 cursor-pointer">
                        <span className="w-4 h-4 inline-block rounded-full border-2 border-gray-300 bg-gray-800 relative">
                            {selectedLanguage === 'Italian' && (
                                <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-blue-600"></span>
                            )}
                        </span>
                        <span className="text-gray-200 text-lg">Italian</span>
                        <input
                            type="radio"
                            id="italian"
                            name="language"
                            value="Italian"
                            checked={selectedLanguage === 'Italian'}
                            onChange={handleLanguageChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </>
    );
};

export default LanguageSettings;
