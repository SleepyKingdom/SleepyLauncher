import { ReactNode } from 'react';

// Import custom CSS
import "../styles/Card.css"


interface CardProps {
    children: ReactNode;
}




const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full h-full card shadow-2xl rounded-md">
            {children}
        </div>
    )
}

export default Card