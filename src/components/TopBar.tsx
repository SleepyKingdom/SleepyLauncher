import React from 'react'
import { ipcRenderer } from 'electron'

import CloseIcon from '../assets/icons/close_icon.png'
import ResizeBigIcon from '../assets/icons/resize_big_icon.png'
import ResizeSmallIcon from '../assets/icons/resize_small_icon.png'
import MinusIcon from '../assets/icons/minus_icon.png'
import Icon from '../modules/Icons'
//import { electron } from 'vite-plugin-electron/simple';


function TopBar() {
    const [resizeState, setResizeState] = React.useState(1);

    const getResizeIcon = () => {
        return resizeState === 1 ? ResizeBigIcon : ResizeSmallIcon;
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
        <header className="h-28">
            <nav className="flex justify-between">
                <div className="flex-grow">
                    <div className="draggable h-8 p-1"></div>
                </div>
                <div className="icon-bar flex bg-gradient-to-br from-purple-700 to-purple-900 border-solid border-b-2 border-l-2 border-gradient-to-br border-purple-700 rounded-bl-lg">
                    <button onClick={handleMinimizeClick} className="hover:bg-gray-500 h-8 w-8 p-2 rounded-bl-lg red">
                        <Icon src={MinusIcon} />
                    </button>
                    <button onClick={handleResizeClick} className="hover:bg-gray-500 h-8 w-8 p-1">
                        <Icon src={getResizeIcon()} />
                    </button>
                    <button onClick={handleCloseClick} className="hover:bg-red-500 h-8 w-8 p-1">
                        <Icon src={CloseIcon} />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default TopBar;