const KingdomsRise = () => {
    return (
        <div className="flex items-center justify-center h-full p-6">
            <div className="max-w-auto mx-auto p-4">
                <div className="relative w-full h-96 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
                    <img
                        src="/KingdomsRise.png"
                        alt="Kingdoms Rise Teaser"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="mt-4 text-center">
                    <h2 className="font-h1 text-4xl font-extrabold text-white">Kingdoms Rise</h2>
                    <p className="text-gray-300 text-lg">
                        Explore the vast realms and join the legendary heroes in their epic quest!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KingdomsRise;
