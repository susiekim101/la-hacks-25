import styles from '../css/FLightInfo.module.css';
import Upload from '../components/Upload.tsx'; // Your upload component
import EnterManually from '../components/EnterManually.tsx'; // Your manual entry button component
import cloud1 from '../assets/images/cloud5.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud1.png';

import React from 'react';

// Spacer component remains the same
const Spacer = ({ size = "1rem" }: { size?: string }) => {
    return <div style={{ height: size }} />;
};

const FlightInfo: React.FC = () => {
    return (
        // Parent handles centering and is positioning context
        <div className={styles.parent}>
            {/* Background Clouds - Absolutely positioned relative to .parent */}
            {/* Use specific Tailwind size classes like w-64 or define md in config */}
            <img src={cloud1} className="absolute top-10 -left-20 w-64 h-64 z-0 opacity-60 animate-pulse" alt="decor 1" />
            <img src={cloud2} className="absolute top-5 -right-10 w-48 h-48 z-0 opacity-60" alt="decor 2" />
            <img src={cloud3} className="absolute bottom-5 -right-32 w-72 h-72 z-0 opacity-50" alt="decor 3" />

            {/* Wrapper for the main content block - THIS is centered by .parent */}
            <div className={styles.contentWrapper}> {/* Use the new wrapper class */}
                <div className={styles.myfont}>New Trip</div>

                {/* The visual container - now handles its own internal layout */}
                <div className={styles.FlightInfoContainer}>
                    {/* Content directly inside FlightInfoContainer */}
                    <div className={styles.normalFont}>Upload Flight Information</div>
                    <Spacer size="1rem" />
                    <Upload /> {/* Assumes Upload component has its own appropriate styling */}
                    <Spacer size="1.5rem" />
                    <div className={styles.normalFont}>or</div>
                    <Spacer size="1.5rem" />
                    <EnterManually /> {/* Assumes EnterManually has its own appropriate styling */}
                    {/* Removed 'next' text - add back if needed */}
                    <Spacer size="1.5rem" />
                </div>
            </div>
        </div>
    );
};

export default FlightInfo;