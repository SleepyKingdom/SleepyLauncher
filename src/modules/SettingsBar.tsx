import { Link } from 'react-router-dom'
import Icon from "./Icons"

// Icon imports
import UserIcon from '../assets/icons/user_icon.png'
import SettingsIcon from '../assets/icons/settings_icon.png'


const SettingsBar = () => {
    return (
        <>
            <div className='flex flex-row-reverse'>
                <button className='h-16 w-16 p-4 bg-gray-700 shadow-md shadow-gray-800 mr-4 rounded-md hover:bg-gray-600 hover:rounded-full'>
                    <Icon src={UserIcon} />
                </button>
                <Link to="/settingspage">
                    <button className='h-16 w-16 p-4 bg-gray-700 shadow-md shadow-gray-800 mr-4 rounded-md hover:bg-gray-600 hover:rounded-full'>
                        <Icon src={SettingsIcon} />
                    </button>
                </Link>
            </div>
        </>
    )
}

export default SettingsBar
