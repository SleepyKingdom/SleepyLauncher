import React from 'react'
import { ipcRenderer } from 'electron'

import Icon from '../components/Icons'


function TopBar() {
    const [resizeState, setResizeState] = React.useState(1);

    const getResizeIcon = () => {
        return resizeState === 1 ? "expand_content" : "collapse_content";
    };

    const handleResizeClick = () => {
        setResizeState(resizeState === 1 ? 2 : 1);
        ipcRenderer.send('toggle-fullscreen');
    };

    const handleMinimizeClick = () => {
        ipcRenderer.send('minimize-window');
    }

    const handleCloseClick = () => {
        ipcRenderer.send('quit-app');
    }

    return (
        <header className="h-auto">
            <nav className="flex justify-between">
                <div className="flex-grow">
                    <div className="draggable h-8 p-1"></div>
                </div>
                <div className="icon-bar flex bg-transparent border-solid border-b-2 border-l-2 border-transparent">
                    <button onClick={handleMinimizeClick} className="hover:bg-gray-500 h-8 w-8 p-2">
                        <Icon icon={"check_indeterminate_small"} />
                    </button>
                    <button onClick={handleResizeClick} className="hover:bg-gray-500 h-8 w-8 p-1">
                        <Icon icon={getResizeIcon()} />
                    </button>
                    <button onClick={handleCloseClick} className="hover:bg-red-500 h-8 w-8 p-1">
                        <Icon icon={"close"} />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default TopBar;