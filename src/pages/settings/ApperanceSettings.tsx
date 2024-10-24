import { useState } from 'react';

const AppearanceSettings = () => {
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value);
    };
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">Appearance Settings</h1>

            {/* Theme Selection */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Theme</h3>
                <div className="space-y-4">
                    <div className="flex items-center bg-gray-700 p-4 rounded-md">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={handleThemeChange}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="dark" className="ml-3 text-gray-200 text-lg">Dark</label>
                    </div>

                    <div className="flex items-center bg-gray-700 p-4 rounded-md">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="light"
                            checked={theme === 'light'}
                            onChange={handleThemeChange}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="light" className="ml-3 text-gray-200 text-lg">Light</label>
                    </div>
                </div>
            </div>
            {/* More appearance-related settings can go here */}
        </>
    );
};

export default AppearanceSettings;
