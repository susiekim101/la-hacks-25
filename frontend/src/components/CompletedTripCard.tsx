import React, { JSX } from 'react';
import ProfilePreview from "./ProfilePreview";
// Remove this import if UpcomingTripCard.css is not actually used for this component anymore
// import "../css/UpcomingTripCard.css";
import style from "../css/login.module.css";
import HStack from '../components/HStack';


function UpcomingTripCard(): JSX.Element {
    return (
        // This centers the entire two-card structure horizontally
        <div className={style.center}>
            {/* This HStack arranges the two cards side-by-side */}
            <HStack
                spacing="2rem" // Space between the two cards
                alignItems="center" // Align cards vertically if they have different heights
            >
                {/* --- First Card --- */}
                <div className={style.inviteCardContainer}>
                    {/* This HStack arranges items within the first card */}
                    <HStack
                        // spacing="0rem" // Set spacing between ProfilePreview and text
                        // Alternative: use margin on .fixed2 (as added in CSS)
                        spacing="1rem" // Example: Adding space via HStack
                        alignItems="center"
                    >
                         <div className={style.fixed3}>January, 25, 2025</div>
                        <ProfilePreview />
                        <ProfilePreview />
                        <ProfilePreview />
                
                    </HStack>
                </div>
            </HStack>
        </div>
    );
}

export default UpcomingTripCard;