import Popup from "../../components/Popup"

const AccountSettings = () => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6 text-gray-200">Connected Accounts</h1>
            <div className="flex items-center justify-center h-full p-6">
                <Popup />
            </div>
        </>
    )
}

export default AccountSettings
