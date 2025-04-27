import React, { JSX } from 'react'; // Import React
import ProfilePreview from "./ProfilePreview"; // Assuming .tsx extension is handled by build process
import AcceptInviteButton from "./AcceptInviteButton"; // Assuming .tsx
import style from "../css/login.module.css";     // Your CSS module
import HStack from '../components/HStack';        // Your HStack component

function InviteCard(): JSX.Element { // Add return type
    return (
        // Use a CSS module class for the card container
        <div className={style.inviteCardContainer}>
            <HStack
                spacing="0rem"
                alignItems="start"
            >
                <ProfilePreview />

                <AcceptInviteButton />
            </HStack>
        </div>
    );
}

export default InviteCard;