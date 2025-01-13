import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import AccountSettings from './settings/AccountSettings';
import ConnectedAccounts from './settings/ConnectedAccounts';
import LanguageSettings from './settings/LanguageSettings';

import GeneralSettings from './settings/GeneralSettings';
import AppearanceSettings from './settings/ApperanceSettings';
import SecuritySettings from './settings/SecuritySettings';
import WebSettings from './settings/WebSettings';

import { useLanguage } from '../context/LanguageContext';
import { getLanguageText } from '../functions/getLanguageText';

const SettingsPage = () => {
    const { language } = useLanguage();
    return (
        <div className="flex h-full w-full">
            <div className="flex-1 flex overflow-hidden">
                <nav className="w-64 bg-gray-700 text-gray-200 border-r border-gray-700 rounded-tr-2xl">
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">{getLanguageText(language, "settings.account.title")}</h2>
                        <NavLink to="/settings/account" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">manage_accounts</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.account.account.title")}</span>
                        </NavLink>
                        <NavLink to="/settings/connectedaccounts" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">link</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.account.connected.title")}</span>
                        </NavLink>
                        <NavLink to="/settings/language" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">language</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.language.title")}</span>
                        </NavLink>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">{getLanguageText(language, "settings.client.title2")}</h2>
                        <NavLink to="/settings/general" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">settings</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.account.connected.title")}</span>
                        </NavLink>
                        <NavLink to="/settings/appearance" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">palette</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.client.appearance.title")}</span>
                        </NavLink>
                        <NavLink to="/settings/security" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">security</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.client.security.title")}</span>
                        </NavLink>
                        <NavLink to="/settings/web" className={({ isActive }) =>
                            `flex py-2 text-sm ${isActive ? 'text-purple-400 hover:text-purple-300' : 'text-gray-200 hover:text-white'}`
                        }>
                            <div className="flex-shrink-0 w-5 h-5">
                                <span className="material-symbols-rounded">public</span>
                            </div>
                            <span className='flex-1 ms-3 whitespace-nowrap'>{getLanguageText(language, "settings.client.web.title")}</span>
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
                        <Route path="appearance" element={<AppearanceSettings />} />
                        <Route path="security" element={<SecuritySettings />} />
                        <Route path="web" element={<WebSettings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
