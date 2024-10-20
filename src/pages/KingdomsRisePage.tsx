const KingdomsRise = () => {
    return (
        <div className="flex flex-col items-center justify-start h-full bg-gray-600 text-white p-6">
            {/* Game Banner */}
            <div className="relative w-full max-w-4xl h-60 bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                    src="/KingdomsRiseBanner.png" // Your banner image path
                    alt="Kingdoms Rise Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Game Title and Version Info */}
            <div className="w-full max-w-4xl text-center mb-4">
                <h1 className="text-4xl font-extrabold">Kingdom's Rise</h1>
                <p className="text-gray-400">Version 1.0.0</p>
            </div>

            {/* Play Button and Options */}
            <div className="w-full max-w-4xl flex items-center justify-between mb-4">
                {/* Play Button */}
                <button
                    onClick={() => alert("Launching Kingdom's Rise...")}
                    className="flex items-center bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
                >
                    <span className="mr-2 material-symbols-rounded">play_arrow</span> Play
                </button>
            </div>

            {/* Tabs (Placeholder for Overview, Mods, etc.) */}
            <div className="w-full max-w-4xl flex justify-start border-b border-gray-700 mb-4">
                <button className="text-white py-2 px-4 border-b-2 border-blue-500">
                    Overview
                </button>
                <button className="text-gray-400 py-2 px-4">
                    Requirements
                </button>
            </div>

            {/* Game Description Section */}
            <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Game Description</h2>
                <p className="text-gray-300">
                    You can explore custom-generated worlds filled with new mobs, challenging dungeons, and powerful bosses. With immersive exploration and cooperative multiplayer options, KingdomsRise offers a fresh take on Minecraft, blending traditional sandbox gameplay with a structured RPG adventure.
                </p>
            </div>
        </div>
    );
};

export default KingdomsRise;
