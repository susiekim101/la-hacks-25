import React, { useState, useRef, JSX } from 'react';
import "../css/ProfilePhoto.css";
import Meow from "../assets/images/jnpfp.jpeg"

const defaultPfp = Meow;
function ProfilePreview2(): JSX.Element { // Added return type for clarity
    const [profilePic, setProfilePic] = useState<string>(defaultPfp);
    // Explicitly type the ref to refer to an HTMLInputElement
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePfpClick = () => {
        // Check if the ref is attached before calling click
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Typed the event
        // Use optional chaining ?. for safer access
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Ensure e.target and e.target.result exist and are strings
                if (e.target?.result && typeof e.target.result === 'string') {
                    setProfilePic(e.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
        // Reset input value
        if(event.target) { // Check if event.target exists
           event.target.value = ''; // Use empty string instead of null
        }
    };

    return (
        <div className="profile-preview">
            <div
                className="pfp-container2"
                onClick={handlePfpClick}
                title="Click to upload new profile picture"
            >
                <img
                    src={profilePic}
                    alt="Profile"
                    className="pfp-image"
                />
            </div>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
        </div>
    );
}

export default ProfilePreview2;