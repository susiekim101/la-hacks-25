import React from 'react'; // Import React if not already done implicitly
import Photo from "../components/ProfilePhoto2"; // Assuming this handles the PFP logic now
import style from "../css/login.module.css";   // Your CSS module
import HStack from '../components/HStack';      // Your HStack component

function ProfilePreview() {
    return (
        // Use a class from the CSS module for the main container
        // This div will span the full width with no horizontal margin/padding
        <div className={style.profilePreviewContainer}>
            {/* HStack now directly inside, controlling internal layout */}
            {/* Adjust spacing/padding within HStack or its children if needed */}
            <HStack
                spacing="1rem" // Reduced spacing example, adjust as needed
                alignItems="center"
                // Optional: If HStack itself doesn't have padding props,
                // you might apply padding here or via its own styles
                // style={{ width: '100%' }} // Ensure HStack fills the container if needed
            > <div style={{ marginRight: '10px' }}>
                <Photo /> {/* Your profile photo component */}
                </div>
                <div className={style.vstack}> {/* Vertical stack for text */}
                    <div className={style.fixed3_5}>Kevin Ngyuen</div>
                    <div className={style.fixed3}>Rank: Silver</div>
                    <div className={style.fixed3}>10 carbon saved</div>
                </div>
            </HStack>
        </div>
    );
}

export default ProfilePreview;