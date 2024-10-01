import React, { useState, ChangeEvent } from 'react';
import Card from "../components/Card";
//import Checkbox from '../components/Checkbox';

// Electron's ipcRenderer
const { ipcRenderer } = window.require('electron');

// Define settings interface
interface Settings {
    autostart: boolean;
    minimizeOnStart: boolean;
    third: boolean;
}

// Function to load settings from the main process (via IPC)
const loadSettings = (): Settings => {
    return ipcRenderer.sendSync('load-settings');
};

// Function to save settings via IPC
const saveSettings = (settings: Settings) => {
    ipcRenderer.send('save-settings', settings);
};

const SettingsPage: React.FC = () => {
    const [checkedState, setCheckedState] = useState<Settings>(loadSettings);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        setCheckedState((prevState: Settings) => {
            const newState: Settings = {
                ...prevState,
                [id]: checked
            };
            saveSettings(newState); // Send the updated settings to the main process
            return newState;
        });
    };

    return (
        <>
            <div className="p-8 h-auto rounded-xl">
                <div className="max-w-auto mx-auto">
                    <Card>
                        <div className="p-6">
                            <h2 className='text-center text-white text-2xl mb-4'>Settings</h2>
                            <form className='space-y-4 text-center text-white'>
                                <div className='flex items-center py-2 px-4 bg-transparent rounded-md shadow-md'>
                                    <input type="checkbox" id="autostart" checked={checkedState.autostart} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Autostart</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-transparent rounded-md shadow-md'>
                                    <input type="checkbox" id="minimizeOnStart" checked={checkedState.minimizeOnStart} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Minimize on start</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-transparent rounded-md shadow-md'>
                                    <input type="checkbox" id="third" checked={checkedState.third} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Third setting</p>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
