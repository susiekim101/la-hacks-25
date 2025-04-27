import styles from '../css/FLightInfo.module.css';
import cloud1 from '../assets/images/cloud5.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud1.png';

import React from 'react';

// // Spacer component remains the same
// const Spacer = ({ size = "1rem" }: { size?: string }) => {
//     return <div style={{ height: size }} />;
// };

const enter_manually: React.FC = () => {
    return (
        // Parent handles centering and is positioning context
        <div className={styles.parent}>
            {/* Background Clouds - Absolutely positioned relative to .parent */}
            {/* Use specific Tailwind size classes like w-64 or define md in config */}
            <img src={cloud1} className="absolute top-10 -left-20 w-64 h-64 z-0 opacity-60 animate-pulse" alt="decor 1" />
            <img src={cloud2} className="absolute top-5 -right-10 w-48 h-48 z-0 opacity-60" alt="decor 2" />
            <img src={cloud3} className="absolute bottom-5 -right-32 w-72 h-72 z-0 opacity-50" alt="decor 3" />
        </div>
    );
};

export default enter_manually;