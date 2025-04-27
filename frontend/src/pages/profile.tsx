// src/pages/Profile.jsx (assuming this path structure)
import React from 'react';
import ProfileTab from "../components/ProfileTab.tsx";
import "../css/Profile.css"; // Standard CSS import (loads styles globally)
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import cloud3 from "../assets/images/cloud3.png";
import cloud4 from "../assets/images/cloud4.png";
import cloud5 from "../assets/images/cloud5.png";
import star from "../assets/images/star.png";
import NavBar from "../components/navbar";

function Profile() {
    return (
        // Use className="parent" - refers to a global CSS class
        <div className="parent">
            <NavBar/> 
             <ProfileTab />  
            {/* Stars */}
      <img src={star} alt="star" className="absolute top-10 left-10 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-180" />
      <img src={star} alt="star" className="absolute top-10 right-10 w-1/8 z-o opacity-100 animate-pulse object-contain" />
      <img src={star} alt="star" className="absolute bottom-100 left-30 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-90" />
   
      <img src={star} alt="star" className="absolute top-0 left-100 w-1/13 z-o opacity-100 animate-pulse object-contain rotate-50" />
      <img src={star} alt="star" className="absolute bottom-100 right-30 w-1/13 z-o opacity-100 animate-pulse object-contain rotate-40" />

      {/* Cloud 1 */}
      <img src={cloud1} alt="cloud1" className="absolute top-10 left-10 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 2 */}
      <img src={cloud2} alt="cloud2" className="absolute top-16 left-3/4 w-1/5 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 3 */}
      <img src={cloud3} alt="cloud3" className="absolute bottom-30 right-1/15 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 4 */}
      <img src={cloud4} alt="cloud4" className="absolute top-60 left-2/3 w-1/5 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 5 */}
      <img src={cloud5} alt="cloud5" className="absolute top-80 left-10 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      

            {/* <h1>Profile Page</h1> Changed "hello" to be more descriptive */}
           
        </div>
    );
}

export default Profile;