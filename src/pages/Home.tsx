
const Home = () => {
    const newsArticles = [
        {
            title: "Kingdom's Rise Official Launch",
            date: "2024-10-24",
            content: "We are thrilled to announce the official release of *Kingdom's Rise*! After months of intense development and testing, players can now dive into a world filled with vast landscapes, complex dungeons, and epic boss battles. Explore new regions, challenge fierce enemies, and discover a world crafted for adventure. Begin your journey today!",
        },
        {
            title: "Sample",
            date: "2024-11-10",
            content: "Sample",
        },
        {
            title: "SleepyLauncher: The All-New Game Hub",
            date: "2024-12-20",
            content: "We're excited to introduce the SleepyLauncher, a dedicated game hub for all SleepyKingdom Games. Access game updates, special events, and patch notes all in one place. The launcher is designed to ensure you’re always up-to-date and ready to dive into the action with just one click.",
        },

    ];
    return (
        <div className="flex flex-col items-center justify-start h-full bg-gray-600 text-white p-6 overflow-hidden">

            {/* Game Title and Version Info */}
            <div className="w-full max-w-4xl text-center mb-4">
                <h1 className="text-4xl font-extrabold">Sleepy News</h1>
            </div>

            {/* Play Button */}


            <div className="w-full max-w-4xl overflow-y-auto">
                {newsArticles.map((article, index) => (
                    <div key={index} className="bg-gray-700 px-6 py-4 m-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-purple-400 mb-1">{article.title}</h2>
                        <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                        <p className="text-gray-300">{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Home;
