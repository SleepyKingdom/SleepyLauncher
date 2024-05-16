import React from 'react'
import CloseIcon from '../assets/icons/close_icon.png'
import ResizeBigIcon from '../assets/icons/resize_big_icon.png'
import ResizeSmallIcon from '../assets/icons/resize_small_icon.png'
import MinusIcon from '../assets/icons/minus_icon.png'
import Icon from '../modules/Icons'

function TopBar() {
    const [resizeState, setResizeState] = React.useState(1);

    const getResizeIcon = () => {
        return resizeState === 1 ? ResizeBigIcon : ResizeSmallIcon;
    };

    const handleResizeClick = () => {
        setResizeState(resizeState === 1 ? 2 : 1);
    };

    return (
        <header className="h-28">
            <nav className="flex justify-between">
                <div className="flex-grow">
                    <div className="draggable h-10 p-2 "></div>
                </div>
                <div className="icon-bar flex bg-gradient-to-br from-purple-700 to-purple-900 border-solid border-b-2 border-l-2 border-gradient-to-br border-purple-700 rounded-bl-lg">
                    <Icon src={MinusIcon} className="hover:bg-gradient-to-br from-gray-300 to-gray-500 h-10 w-10 p-2 rounded-bl-lg" />
                    <button onClick={handleResizeClick} className="hover:bg-gradient-to-br from-gray-300 to-gray-500 h-10 w-10 p-2">
                        <Icon src={getResizeIcon()} />
                    </button>
                    <Icon src={CloseIcon} className="hover:bg-gradient-to-br from-red-700 to-red-950 h-10 w-10 p-2" />
                </div>
            </nav>
        </header>
    );
}

export default TopBar;