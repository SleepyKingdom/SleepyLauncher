import React, { useState, ChangeEvent } from 'react'

import Card from "../components/Card";


import settings from '../data/settings.json'


const SettingsPage: React.FC = () => {

    const autostartSetting = settings.settings.autostart
    const minimizeOnStartSetting = settings.settings.minimizeOnStart

    const [checkedState, setCheckedState] = useState({
        autostart: autostartSetting,
        minimizeOnStart: minimizeOnStartSetting,
        third: false
    });

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        setCheckedState(prevState => ({
            ...prevState,
            [id]: checked
        }));

        // Update the JSON settings object
        if (id === "autostart") {
            settings.settings.autostart = checked;
        } else if (id === "minimizeOnStart") {
            settings.settings.minimizeOnStart = checked;
        } else if (id === "third") {
            // Assuming there is a third setting in the JSON to update
            settings.settings.third = checked;
        }

        // Optionally save the settings object to a file or API
        // For example:
        // saveSettings(settings);
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
                                    <p className='pl-4'>Do this</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-transparent rounded-md shadow-md'>
                                    <input type="checkbox" id="minimizeOnStart" checked={checkedState.minimizeOnStart} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Do that</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-transparent rounded-md shadow-md'>
                                    <input type="checkbox" id="third" checked={checkedState.third} onChange={handleCheckboxChange} />
                                    <p className='pl-4 '>Do this</p>
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
