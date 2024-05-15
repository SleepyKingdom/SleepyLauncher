import React, { ReactNode } from 'react';
import { closeWindow } from './windowControl';

interface CloseButtonProps {
    children: ReactNode;
}


const CloseButton: React.FC<CloseButtonProps> = ({ children }) => {
    const handleCloseClick = () => {
        closeWindow();
    };

    return (
        <button onClick={handleCloseClick}>
            {children}
        </button>
    );
};

export default CloseButton;
