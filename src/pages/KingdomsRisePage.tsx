import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getLanguageText } from '../functions/getLanguageText';
import { getSettings } from '../functions/getSettings';

const KingdomsRise = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");

    useEffect(() => {
        try {
            const language = getSettings("language") || "en";
            setCurrentLanguage(language);
        } catch (error) {
            console.error("Error loading language setting:", error);
        }
    }, []);

    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        navRefs.current = navRefs.current.slice(0, 2);

        if (location.pathname.includes("overview")) {
            setActiveIndex(0);
        } else if (location.pathname.includes("requirements")) {
            setActiveIndex(1);
        }
    }, [location]);

    return (
        <div className="flex flex-col items-center justify-start h-full bg-gray-600 text-white p-6">
            <div className="relative w-full max-w-4xl h-60 bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                    src="/KingdomsRiseBanner.png"
                    alt="Kingdoms Rise Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full max-w-4xl text-center mb-4">
                <h1 className="text-4xl font-extrabold">Kingdom's Rise</h1>
                <p className="text-gray-400">
                    {getLanguageText(currentLanguage, "universal.headers.version")} 1.0.0
                </p>
            </div>

            <div className="w-full max-w-4xl flex items-center justify-between mb-4">
                <button
                    onClick={() => alert("Launching Kingdom's Rise...")}
                    className="flex items-center bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded-lg font-semibold transition-colors"
                >
                    <span className="mr-2 material-symbols-rounded">play_arrow</span>
                    {getLanguageText(currentLanguage, "universal.buttons.playbutton")}
                </button>
            </div>

            <div className="relative w-full max-w-4xl flex justify-start border-b border-gray-700 mb-4">
                <NavLink
                    to="overview"
                    className={({ isActive }) =>
                        `block py-2 px-4 text-sm relative ${isActive ? 'text-purple-400' : 'text-gray-200 hover:text-white'}`
                    }
                    ref={(el) => (navRefs.current[0] = el)}
                    onClick={() => handleNavClick(0)}
                >
                    {getLanguageText(currentLanguage, "universal.headers.overviewheader")}
                </NavLink>
                <NavLink
                    to="requirements"
                    className={({ isActive }) =>
                        `block py-2 px-4 text-sm relative ${isActive ? 'text-purple-400' : 'text-gray-200 hover:text-white'}`
                    }
                    ref={(el) => (navRefs.current[1] = el)}
                    onClick={() => handleNavClick(1)}
                >
                    {getLanguageText(currentLanguage, "universal.headers.requirementsheader")}
                </NavLink>

                <div
                    className="absolute bottom-0 h-1 bg-purple-400 transition-all duration-300 ease-in-out"
                    style={{
                        width: navRefs.current[activeIndex]?.offsetWidth || 0,
                        left: navRefs.current[activeIndex]?.offsetLeft || 0,
                    }}
                ></div>
            </div>

            <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
                <Routes>
                    <Route index element={<Navigate to="overview" replace />} />
                    <Route
                        path="overview"
                        element={
                            <div>
                                <h2 className="text-2xl font-bold mb-2">
                                    {getLanguageText(currentLanguage, "universal.headers.overviewheader")}
                                </h2>
                                <p className="text-gray">{getLanguageText(currentLanguage, "pages.kingdomsrisepage.overviewtext")}</p>
                            </div>
                        }
                    />
                    <Route
                        path="requirements"
                        element={
                            <div>
                                <h2 className="text-2xl font-bold mb-2">
                                    {getLanguageText(currentLanguage, "universal.headers.requirementsheader")}
                                </h2>
                                <p className="text-gray">{getLanguageText(currentLanguage, "pages.kingdomsrisepage.requirementstext")}</p>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default KingdomsRise;
