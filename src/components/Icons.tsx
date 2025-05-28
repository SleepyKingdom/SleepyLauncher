interface IconProps {
    icon: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
    className = className + " material-symbols-rounded"
    console.log(className)
    return <div><span className={className}>{icon}</span></div>;
};

export default Icon;