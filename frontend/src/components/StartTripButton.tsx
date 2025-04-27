// src/components/StartTripButton.tsx (or .jsx)
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import styles from '../css/StartTripButton.module.css'; // CSS module for styling

// Define the path for the flight navigation page
// **IMPORTANT**: Make sure you have a Route defined for this path in your App's router setup!
const FLIGHT_NAVIGATION_PATH = '/flightinfo'; // Or '/flight-navigation', '/directions', etc.

const StartTripButton: React.FC = () => {
    return (
        <Link to={FLIGHT_NAVIGATION_PATH} className={styles.startTripButton}>
            Start Trip
        </Link>
    );
};

export default StartTripButton;