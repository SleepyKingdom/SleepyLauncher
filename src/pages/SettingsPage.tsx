import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

const SettingsPage = () => {
    return (
        <div className="flex h-full bg-gray-800">
            <div className="flex-1 flex">
                <nav className="w-64 bg-gray-800 text-gray-300 border-r border-gray-700">
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">ACCOUNT</h2>
                        <NavLink to="/settings/profile" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>My Profile</NavLink>
                        <NavLink to="/settings/general" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>General</NavLink>
                        <NavLink to="/settings/preferences" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Preferences</NavLink>
                        <NavLink to="/settings/applications" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Applications</NavLink>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xs font-semibold text-gray-500 mb-4">WORKSPACE</h2>
                        <NavLink to="/settings/workspace" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Settings</NavLink>
                        <NavLink to="/settings/members" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Members</NavLink>
                        <NavLink to="/settings/upgrade" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Upgrade</NavLink>
                        <NavLink to="/settings/security" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Security</NavLink>
                        <NavLink to="/settings/templates" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Templates</NavLink>
                        <NavLink to="/settings/billing" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Billing</NavLink>
                        <NavLink to="/settings/roadmaps" className={({ isActive }) =>
                            `block py-2 text-sm ${isActive ? 'text-blue-400' : 'text-gray-300'} hover:text-white`
                        }>Roadmaps</NavLink>
                    </div>
                </nav>
                <main className="flex-1 bg-white p-8">
                    <Routes>
                        <Route index element={<Navigate to="workspace" replace />} />
                        <Route path="general" element={<GeneralSettings />} />
                        <Route path="profile" element={<ProfileSettings />} />
                        <Route path="preferences" element={<PreferencesSettings />} />
                        <Route path="applications" element={<ApplicationsSettings />} />
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
        <h1 className="text-3xl font-bold mb-6">Workspace Settings</h1>
        {/* Add your workspace settings form or content here */}
    </div>
);

// Placeholder components for other settings pages
const GeneralSettings = () => <h1 className="text-3xl font-bold mb-6">General Settings</h1>;
const ProfileSettings = () => <h1 className="text-3xl font-bold mb-6">My Profile</h1>;
const PreferencesSettings = () => <h1 className="text-3xl font-bold mb-6">Preferences</h1>;
const ApplicationsSettings = () => <h1 className="text-3xl font-bold mb-6">Applications</h1>;
const MembersSettings = () => <h1 className="text-3xl font-bold mb-6">Members</h1>;
const UpgradeSettings = () => <h1 className="text-3xl font-bold mb-6">Upgrade</h1>;
const SecuritySettings = () => <h1 className="text-3xl font-bold mb-6">Security</h1>;
const TemplatesSettings = () => <h1 className="text-3xl font-bold mb-6">Templates</h1>;
const BillingSettings = () => <h1 className="text-3xl font-bold mb-6">Billing</h1>;
const RoadmapsSettings = () => <h1 className="text-3xl font-bold mb-6">Roadmaps</h1>;

export default SettingsPage;