interface IconProps {
    src: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className }) => {
    return <button><img src={src} alt="" className={className} /></button>;
};

export default Icon;