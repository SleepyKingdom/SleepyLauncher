interface IconProps {
    src: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className }) => {
    return <img src={src} alt="" className={className} />;
};

export default Icon;