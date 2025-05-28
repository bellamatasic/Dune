import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

interface ResponsiveWrapperProps {
    mobileComponent: React.ComponentType;
    desktopComponent: React.ComponentType;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
    mobileComponent: MobileComponent,
    desktopComponent: DesktopComponent
}) => {
    const isMobile = useIsMobile();

    return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

export default ResponsiveWrapper; 