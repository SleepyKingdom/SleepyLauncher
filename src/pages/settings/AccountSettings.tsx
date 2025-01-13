import { useLanguage } from '../../context/LanguageContext';
import { getLanguageText } from '../../functions/getLanguageText';




interface AccountSettingsProps {
    profilePic?: string; // optional prop with string type
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ profilePic }) => {
    const { language } = useLanguage();
    return (
        <>
            {/* Header with title and Edit Profile button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-100">{getLanguageText(language, "settings.account.account.title")}</h1>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                    {getLanguageText(language, "settings.account.account.editprofile")}
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md mb-6">
                {profilePic ? (
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-14 h-14 rounded-full"
                    />
                ) : (
                    <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="material-symbols-rounded text-gray-200 text-3xl">person</span>
                    </div>
                )}
                <div>
                    <h2 className="text-lg font-semibold text-gray-100">Lunartyx</h2>
                    <p className="text-gray-400 text-sm">@lunartyx</p>
                </div>
            </div>

            {/* Account Details Section */}
            <div className="space-y-4">
                {/* Display Name */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">{getLanguageText(language, "settings.account.account.dname")}</p>
                    <p className="text-gray-200 font-medium">Lunartyx</p>
                </div>

                {/* User Name */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">{getLanguageText(language, "settings.account.account.uname")}</p>
                    <p className="text-gray-200 font-medium">@lunartyx</p>
                </div>

                {/* Email */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">{getLanguageText(language, "settings.account.account.email")}</p>
                    <p className="text-gray-200 font-medium">{"dominik@urbanetz.li"}</p>
                </div>

                {/* Phone Number */}
                <div className="bg-gray-700 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">{getLanguageText(language, "settings.account.account.mobile")}</p>
                    <p className="text-gray-200 font-medium">******2390</p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Authentication Section */}
            <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md transition duration-200 hover:bg-blue-700">
                    {getLanguageText(language, "settings.account.account.passwordcng")}
                </button>
            </div>
        </>
    );
}

export default AccountSettings;
