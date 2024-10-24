import { useState } from 'react';

const GeneralSettings = () => {
    const [gameDownloadLocation, setGameDownloadLocation] = useState('');
    const [minecraftLocation, setMinecraftLocation] = useState('');

    // Placeholder function for handling game download location
    const handleGameDownloadLocation = () => {
        // Logic to open a file picker and set game download location
        // For now, we simulate the action by setting a static location
        setGameDownloadLocation('C:/Games/Download');
    };

    // Placeholder function for handling Minecraft.exe location
    const handleMinecraftLocation = () => {
        // Logic to open a file picker and set Minecraft.exe location
        // For now, we simulate the action by setting a static location
        setMinecraftLocation('%appdata%/Roaming/.minecraft/Minecraft.exe');
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">General Settings</h1>

            {/* General Game Client Settings */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Game Client Settings</h3>
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-200">Placeholder for game client settings (e.g., graphics, sound, etc.)</p>
                </div>
            </div>

            {/* Game Download Location */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Game Download Location</h3>
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label className="flex-grow text-gray-200 text-lg">
                        {gameDownloadLocation || 'Not Set'}
                    </label>
                    <button
                        onClick={handleGameDownloadLocation}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                        Browse
                    </button>
                </div>
            </div>

            {/* Minecraft.exe Location */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Minecraft.exe Location</h3>
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label className="flex-grow text-gray-200 text-lg">
                        {minecraftLocation || '%appdata%/Roaming/.minecraft'}
                    </label>
                    <button
                        onClick={handleMinecraftLocation}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                        Browse
                    </button>
                </div>
            </div>
        </>
    );
};

export default GeneralSettings
