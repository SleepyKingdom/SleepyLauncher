import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import AccountSettings from './settings/AccountSettings';
import ConnectedAccounts from './settings/ConnectedAccounts';
import LanguageSettings from './settings/LanguageSettings';

import GeneralSettings from './settings/GeneralSettings';
import ApperanceSettings from './settings/ApperanceSettings';
import SecuritySettings from './settings/SecuritySettings';
import WebSettings from './settings/WebSettings';

const SettingsPage = () => {
    return (
        <div className="flex h-full w-full">
            <div className="flex-1 flex overflow-hidden">
                <nav className="w-64 bg-gray-700 text-gray-200 border-r border-gray-700 rounded-tr-2xl">
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">ACCOUNT</h2>
                        <NavLink to="/settings/account" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">manage_accounts</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>My Account</span>
                        </NavLink>
                        <NavLink to="/settings/connectedaccounts" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">link</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>Connected Accounts</span>
                        </NavLink>
                        <NavLink to="/settings/language" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">language</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>Language</span>
                        </NavLink>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">CLIENT SETTINGS</h2>
                        <NavLink to="/settings/general" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">settings</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>General Settings</span>
                        </NavLink>
                        <NavLink to="/settings/apperance" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">palette</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>Appearance</span>
                        </NavLink>
                        <NavLink to="/settings/security" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">security</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>Security</span>
                        </NavLink>
                        <NavLink to="/settings/web" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">public</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>Web</span>
                        </NavLink>
                    </div>
                </nav>
                <main className="flex-1 bg-gray-600 p-8 rounded-tr-2xl overflow-hidden">
                    <Routes>
                        <Route index element={<Navigate to="account" replace />} />
                        <Route path="account" element={<AccountSettings />} />
                        <Route path="connectedaccounts" element={<ConnectedAccounts />} />
                        <Route path="language" element={<LanguageSettings />} />

                        <Route path="general" element={<GeneralSettings />} />
                        <Route path="apperance" element={<ApperanceSettings />} />
                        <Route path="security" element={<SecuritySettings />} />
                        <Route path="web" element={<WebSettings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
