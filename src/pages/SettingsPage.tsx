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
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>My Account
                        </NavLink>
                        <NavLink to="/settings/connectedaccounts" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Connected Accounts
                        </NavLink>
                        <NavLink to="/settings/language" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Language</NavLink>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">CLIENT SETTINGS</h2>
                        <NavLink to="/settings/general" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>General Settings</NavLink>
                        <NavLink to="/settings/apperance" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Apperance</NavLink>
                        <NavLink to="/settings/security" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Security</NavLink>
                        <NavLink to="/settings/web" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-purple-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Web</NavLink>
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