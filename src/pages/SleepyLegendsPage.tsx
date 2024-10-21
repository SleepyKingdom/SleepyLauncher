import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const SleepyLegendsPage = () => {
    // Declare the type of navRefs as an array of HTMLAnchorElement or null
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation(); // Hook to get the current route location

    // Explicitly declare the type for index as number
    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        // Ensure the navRefs always reflect the latest DOM elements
        navRefs.current = navRefs.current.slice(0, 2); // Two tabs

        // Determine the active index based on the current route when the component mounts
        if (location.pathname.includes("overview")) {
            setActiveIndex(0);
        } else if (location.pathname.includes("requirements")) {
            setActiveIndex(1);
        }
    }, [location]); // Run this effect when the route changes

    return (
        <div className="flex flex-col items-center justify-start h-full bg-gray-600 text-white p-6">
            {/* Game Banner */}
            <div className="relative w-full max-w-4xl h-60 bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                    src="/SleepyLegendsBanner.png" // Your banner image path
                    alt="SleepyLegends Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Game Title and Version Info */}
            <div className="w-full max-w-4xl text-center mb-4">
                <h1 className="text-4xl font-extrabold">SleepyLegends</h1>
                <p className="text-gray-400">Version 1.0.0</p>
            </div>

            {/* Play Button */}
            <div className="w-full max-w-4xl flex items-center justify-between mb-4">
                <button
                    onClick={() => alert("Launching SleepyLegends...")}
                    className="flex items-center bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
                >
                    <span className="mr-2 material-symbols-rounded">play_arrow</span> Play
                </button>
            </div>

            {/* Tabs Navigation with Sliding Bottom Border */}
            <div className="relative w-full max-w-4xl flex justify-start border-b border-gray-700 mb-4">
                {/* Tab Links */}
                <NavLink
                    to="overview"
                    className={({ isActive }) =>
                        `block py-2 px-4 text-sm relative ${isActive ? 'text-purple-400' : 'text-gray-200 hover:text-white'}`
                    }
                    ref={el => (navRefs.current[0] = el)} // Store ref for animation
                    onClick={() => handleNavClick(0)}
                >
                    Overview
                </NavLink>
                <NavLink
                    to="requirements"
                    className={({ isActive }) =>
                        `block py-2 px-4 text-sm relative ${isActive ? 'text-purple-400' : 'text-gray-200 hover:text-white'}`
                    }
                    ref={el => (navRefs.current[1] = el)} // Store ref for animation
                    onClick={() => handleNavClick(1)}
                >
                    Requirements
                </NavLink>

                {/* Animated Border */}
                <div
                    className="absolute bottom-0 h-1 bg-purple-400 transition-all duration-300 ease-in-out"
                    style={{
                        width: navRefs.current[activeIndex]?.offsetWidth || 0,
                        left: navRefs.current[activeIndex]?.offsetLeft || 0,
                    }}
                ></div>
            </div>

            {/* Routes for Tabs */}
            <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
                <Routes>
                    <Route index element={<Navigate to="overview" replace />} />
                    <Route path="overview" element={<OverviewPage />} />
                    <Route path="requirements" element={<RequirementsPage />} />
                </Routes>
            </div>
        </div>
    );
};

const OverviewPage = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">Game Overview</h2>
            <p className="text-gray-300">
                You can explore custom-generated worlds filled with new mobs, challenging dungeons, and powerful bosses. With immersive exploration and cooperative multiplayer options, KingdomsRise offers a fresh take on Minecraft, blending traditional sandbox gameplay with a structured RPG adventure.
            </p>
        </div>
    );
};

const RequirementsPage = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">System Requirements</h2>
            <p className="text-gray-300">
                SleepyLegends requires a modern PC with a decent graphics card, 8 GB RAM, and at least 10 GB of free disk space. Ensure your system is up-to-date with the latest Java runtime and a installed copy of Minecraft. <br />
                Also link your Microsoft account {"(with a valid minecraft license)"} via settings {"->"} connected accounts
            </p>
        </div>
    );
};

export default SleepyLegendsPage;
