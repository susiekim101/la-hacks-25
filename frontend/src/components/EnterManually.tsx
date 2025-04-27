// src/components/UploadManually.tsx (Example file path)

import React from 'react';
import { useNavigate } from 'react-router-dom';

const UploadManually = () => {
    const navigate = useNavigate();

    // Define the custom color for the text
    const manualEntryColor = "#000850"; // Your specified dark blue/black color

    // Handler function to navigate when the button is clicked
    const handleManualEntryClick = () => {
        console.log("Navigating to /enter_manually...");
        navigate('/enter_manually'); // Navigate to the specified route
    };

    return (
        // Using a button element, styled to look like an underlined link
        <button
            type="button" // Important for buttons not submitting forms
            onClick={handleManualEntryClick}
            className={`
                p-2                   /* Remove default padding */
                underline             /* Add underline to text */
                text-[${manualEntryColor}] /* Set text color */
                font-medium           /* Adjust font weight as needed */
                cursor-pointer
                hover:text-opacity-80   /* Optional: Slight fade on hover */
                focus:outline-none      /* Remove default focus outline */
                focus:ring-1 focus:ring-offset-1 focus:ring-[${manualEntryColor}] /* Custom focus ring for accessibility */
                transition duration-150 ease-in-out
            `}
            style={{ color: manualEntryColor }} // Set text color via style attribute as well
        >
            Enter Manually
        </button>
    );
};

export default UploadManually;