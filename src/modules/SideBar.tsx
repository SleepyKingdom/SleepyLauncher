import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-800">
                {/* Top-aligned section (Games) */}
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="font-p w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">house</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                        </Link>
                    </li>
                    <Divider className='bg-gray-500' />
                    <li>
                        <Link to="/sleepylegends" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">swords</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">SleepyLegends</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/kingdomsrise" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">fort</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">Kingdom's Rise</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/smt2" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">question_mark</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">smt2</span>
                        </Link>
                    </li>
                </ul>

                {/* Bottom-aligned section (Settings and Login) */}
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to="/settings" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">settings</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group">
                            <div className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-200">
                                <span className="material-symbols-rounded">login</span>
                            </div>
                            <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Navigation;
