import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

const SettingsPage = () => {
    return (
        <div className="flex h-full w-full">
            <div className="flex-1 flex overflow-hidden">
                <nav className="w-64 bg-gray-700 text-gray-200 border-r border-gray-700 rounded-tr-2xl">
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">ACCOUNT</h2>
                        <NavLink to="/settings/account" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>My Account
                        </NavLink>
                        <NavLink to="/settings/connectedaccounts" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Connected Accounts
                        </NavLink>
                        <NavLink to="/settings/apperance" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Apperance</NavLink>
                        <NavLink to="/settings/language" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Language</NavLink>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">Client Settings</h2>
                        <NavLink to="/settings/workspace" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Settings</NavLink>
                        <NavLink to="/settings/members" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Members</NavLink>
                        <NavLink to="/settings/upgrade" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Upgrade</NavLink>
                        <NavLink to="/settings/security" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Security</NavLink>
                        <NavLink to="/settings/templates" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Templates</NavLink>
                        <NavLink to="/settings/billing" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Billing</NavLink>
                        <NavLink to="/settings/roadmaps" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400 hover:text-blue-200' : 'text-gray-200 hover:text-white'}`
                        }>Roadmaps</NavLink>
                    </div>
                </nav>
                <main className="flex-1 bg-gray-600 p-8 rounded-tr-2xl overflow-hidden">
                    <Routes>
                        <Route index element={<Navigate to="workspace" replace />} />
                        <Route path="account" element={<AccountSettings />} />
                        <Route path="connectedaccounts" element={<ConnectedAccounts />} />
                        <Route path="apperance" element={<ApperianceSettings />} />
                        <Route path="language" element={<LanguageSettings />} />

                        <Route path="workspace" element={<WorkspaceSettings />} />
                        <Route path="members" element={<MembersSettings />} />
                        <Route path="upgrade" element={<UpgradeSettings />} />
                        <Route path="security" element={<SecuritySettings />} />
                        <Route path="templates" element={<TemplatesSettings />} />
                        <Route path="billing" element={<BillingSettings />} />
                        <Route path="roadmaps" element={<RoadmapsSettings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};



const WorkspaceSettings = () => (
    <div>
        <h1 className={placeHolderCSS}>Workspace Settings</h1>
        {/* Add your workspace settings form or content here */}
    </div>
);

// Placeholder components for other settings pages

const placeHolderCSS = "text-3xl font-bold mb-6 text-gray-200"

const AccountSettings = () => <h1 className={placeHolderCSS}>My Account</h1>;
const ConnectedAccounts = () => <h1 className={placeHolderCSS}>Connected Accounts</h1>;
const ApperianceSettings = () => <h1 className={placeHolderCSS}>Apperiance</h1>;
const LanguageSettings = () => <h1 className={placeHolderCSS}>Language</h1>;
const MembersSettings = () => <h1 className={placeHolderCSS}>Members</h1>;
const UpgradeSettings = () => <h1 className={placeHolderCSS}>Upgrade</h1>;
const SecuritySettings = () => <h1 className={placeHolderCSS}>Security</h1>;
const TemplatesSettings = () => <h1 className={placeHolderCSS}>Templates</h1>;
const BillingSettings = () => <h1 className={placeHolderCSS}>Billing</h1>;
const RoadmapsSettings = () => <h1 className={placeHolderCSS}>Roadmaps</h1>;

export default SettingsPage;