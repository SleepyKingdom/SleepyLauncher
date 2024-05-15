import CloseIcon from '../assets/icons/close_icon.png'
import ResizeBigIcon from '../assets/icons/resize_big_icon.png'
import ResizeSmallIcon from '../assets/icons/resize_small_icon.png'
import MinusIcon from '../assets/icons/minus_icon.png'
import Icon from '../modules/Icons'
//import CloseButton from '../modules/CloseButton'

let ResizeIcon = ResizeBigIcon

function windowSizeState() {
    if (ResizeIcon == ResizeBigIcon) {
        ResizeIcon = ResizeBigIcon
        return ResizeIcon
    }
    else {
        ResizeIcon = ResizeSmallIcon
    }
    return ResizeIcon

}



const TopBar = () => {
    return (
        <header className="h-28">
            <nav className="flex justify-between">
                <div className="flex-grow">
                    <div className="draggable bg-gray-400 h-10 p-2">
                    </div>
                </div>
                <div className="icon-bar flex bg-gray-500">
                    <Icon src={MinusIcon} className="hover:bg-gray-300 h-10 w-10 p-2" />
                    <Icon src={windowSizeState()} className="hover:bg-gray-300 h-10 w-10 p-2" />

                    <Icon src={CloseIcon} className="hover:bg-red-600 h-10 w-10 p-2" />

                </div>
            </nav>
        </header>
    );
};

export default TopBar;