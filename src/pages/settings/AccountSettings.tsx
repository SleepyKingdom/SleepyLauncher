const AccountSettings = () => {
    return (
        <>
            {/* Header with title and Edit Profile button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-100">My Account</h1>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                    Edit Profile
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md mb-6">
                <img
                    src="https://via.placeholder.com/64"
                    alt="Profile"
                    className="w-14 h-14 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold text-gray-100">Lunartyx</h2>
                    <p className="text-gray-400 text-sm">@lunartyx</p>
                </div>
            </div>

            {/* Account Details Section */}
            <div className="space-y-4">
                {/* Email */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Display Name</p>
                    <p className="text-gray-200 font-medium">Lunartyx</p>
                </div>

                {/* Phone Number */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">User Name</p>
                    <p className="text-gray-200 font-medium">@lunartyx</p>
                </div>

                {/* Phone Number */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-200 font-medium">{"dominik@urbanetz.li"}</p>
                </div>

                {/* Phone Number */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Phone Number</p>
                    <p className="text-gray-200 font-medium">******2390</p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Authentication Section */}
            <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md transition duration-200 hover:bg-blue-700">
                    Change Password
                </button>
            </div>
        </>
    );
}

export default AccountSettings;
