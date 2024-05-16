import '../styles/NotificationCard.css'

const NotificationCard = () => {
    return (
        <div className="notification playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>

            <div className="infotop">
                <div className="icon"></div>

                <div className="name text-white">Notification</div>
            </div>
        </div>
    );
};

export default NotificationCard;