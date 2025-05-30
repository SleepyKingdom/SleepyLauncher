import { useLanguage } from '../../context/LanguageContext';
import { getLanguageText } from '../../functions/getLanguageText';

const handleMicrosoftLogin = async () => {
    const result = await window.electronAPI.loginWithMicrosoft();
    if (result.success) {
        alert("Login successful! User token saved.");
        console.log(result.profile); // Can show name later
    } else {
        alert("Login failed: " + result.error);
    }
};


const ConnectedAccounts = () => {
    const { language } = useLanguage();
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-100 mb-6">{getLanguageText(language, "settings.account.connected.title")}</h1>

            {/* Accounts Section */}
            <div className="space-y-6">
                {/* Discord */}
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/discord_icon.png"
                            alt="Discord"
                            className="w-10 h-10"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-100">Discord</h2>
                            <p className="text-gray-400 text-sm">
                                {getLanguageText(language, "settings.account.connected.dc")} Lunartyx#1234
                            </p>
                        </div>
                    </div>
                    <div>
                        {true /* This condition should toggle the button */}
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-red-600">
                            {getLanguageText(language, "settings.account.connected.disconnect")}
                        </button>
                        <button onClick={handleMicrosoftLogin} className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                            {getLanguageText(language, "settings.account.connected.connect")}
                        </button>
                    </div>
                </div>

                {/* Microsoft */}
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/microsoft_icon.png"
                            alt="Microsoft"
                            className="w-10 h-10"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-100">Microsoft</h2>
                            <p className="text-gray-400 text-sm">
                                {getLanguageText(language, "settings.account.connected.ms")}
                            </p>
                        </div>
                    </div>
                    <div>
                        {false /* This condition should toggle the button */}
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-red-600">
                            {getLanguageText(language, "settings.account.connected.disconnect")}
                        </button>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700">
                            {getLanguageText(language, "settings.account.connected.connect")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectedAccounts;
