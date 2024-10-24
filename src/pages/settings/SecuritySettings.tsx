const SecuritySettings = () => {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">Security Settings</h1>

            {/* Force Logout Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Session Management</h3>
                <button className="w-full bg-red-500 text-white py-2 rounded-md transition duration-200 hover:bg-red-600">
                    Force Logout Everywhere
                </button>
            </div>

            {/* Two-Factor Authentication Section */}
            <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Two-Factor Authentication (2FA)</h3>

                {/* Enable 2FA via Mobile */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label className="flex-grow text-gray-200 text-lg">Enable via Mobile</label>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                        Enable
                    </button>
                </div>

                {/* Enable 2FA via Email */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label className="flex-grow text-gray-200 text-lg">Enable via Email</label>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                        Enable
                    </button>
                </div>

                {/* Enable 2FA via Authenticator App */}
                <div className="flex items-center bg-gray-700 p-4 rounded-md">
                    <label className="flex-grow text-gray-200 text-lg">Enable via Authenticator App</label>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                        Enable
                    </button>
                </div>
            </div>
        </>
    );
};

export default SecuritySettings;
