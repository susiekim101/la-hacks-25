// src/pages/Profile.jsx (assuming this path structure)
import React from 'react';
import ProfileTab from "../components/ProfileTab.jsx";
import "../css/Profile.css"; // Standard CSS import (loads styles globally)

function Profile() {
    return (
        // Use className="parent" - refers to a global CSS class
        <div className="parent">
            {/* <h1>Profile Page</h1> Changed "hello" to be more descriptive */}
            <ProfileTab />  
        </div>
    );
}

export default Profile;