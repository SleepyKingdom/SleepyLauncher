interface IconProps {
    icon: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
    className = className + " material-symbols-rounded"
    console.log(className)
    return <button><span className={className}>{icon}</span></button>;
};

export default Icon;