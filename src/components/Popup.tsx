import { shell } from 'electron'; // Correctly import shell from electron

const Popup: React.FC = () => {

    const openExternalLink = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const link = 'https://sleepykingdom.net'; // Set the external link you want to open
        shell.openExternal(link);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center bg-gray-700 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-red-500">Attention!</h2>
                <p className="mb-4 text-center">
                    You are about to leave SleepyLauncher and open the Webpage of SleepyKingdom.
                </p>

                <button
                    className="bg-red-500 hover:bg-red-600 shadow-lg text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                    onClick={openExternalLink}
                >
                    Open Browser
                </button>
            </div>
        </div>
    );
};

export default Popup;
