import React, { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';

import Card from "../components/Card";
import Icon from "../components/Icons";
import BackIcon from "../assets/icons/arrow_back_icon.png";

import settings from '../data/settings.json'


const SettingsPage: React.FC = () => {

    const autostart

    const [checkedState, setCheckedState] = useState({
        autostart = settings.settings.autostart,
        second: false,
        third: false
    });

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        setCheckedState(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };



    return (
        <>
            <div className="p-8 bg-gradient-to-r from-purple-600 to-purple-800 h-auto rounded-xl">
                <div className='flex flex-row-reverse mb-8'>
                    <Link to="/">
                        <button className='h-16 w-16 p-4 bg-gray-700 shadow-md shadow-gray-800 mr-4 rounded-md hover:bg-gray-600 hover:rounded-full'>
                            <Icon src={BackIcon} />
                        </button>
                    </Link>
                </div>
                <div className="max-w-auto mx-auto">
                    <Card>
                        <div className="p-6">
                            <h2 className='text-center text-white text-2xl mb-4'>Settings</h2>
                            <form className='space-y-4 text-center text-white'>
                                <div className='flex items-center py-2 px-4 bg-purple-500 rounded-md shadow-md'>
                                    <input type="checkbox" id="first" checked={checkedState.first} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Do this</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-purple-500 rounded-md shadow-md'>
                                    <input type="checkbox" id="second" checked={checkedState.second} onChange={handleCheckboxChange} />
                                    <p className='pl-4'>Do that</p>
                                </div>
                                <div className='flex items-center py-2 px-4 bg-purple-500 rounded-md shadow-md'>
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
