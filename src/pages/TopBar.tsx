import CloseIcon from '../assets/icons/close_icon.png'
import ResizeIcon from '../assets/icons/resize_icon.png'
import MinusIcon from '../assets/icons/minus_icon.png'


const TopBar = () => {
    return (
        <>
            <div className='w-11/12'>

            </div>
            <div className="w-1/12 h-10">
                <div className='size-1/3'>
                    <img src={MinusIcon} className="object-fill"></img>
                </div>
                <div className='size-1/3'>
                    <img src={ResizeIcon} className="object-fill"></img>
                </div>
                <div className='size-1/3'>
                    <img src={CloseIcon} className="object-fill"></img>
                </div>
            </div>
        </>
    )
}

export default TopBar
