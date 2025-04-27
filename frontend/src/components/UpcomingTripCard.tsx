import ProfilePreview from "./ProfilePreview.tsx";
import "../css/UpcomingTripCard.css";

function UpcomingTripCard(){
    return(
        <div className = "upcoming-trip-card">
            <div className = "profile-preview">
                <ProfilePreview/>
            </div>
            <div className = "contact-info">
                <p>contact info</p>
            </div>
        </div>
    );
}

export default UpcomingTripCard