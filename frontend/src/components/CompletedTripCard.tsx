import ProfilePreview from "./ProfilePreview.tsx";


function CompletedTripCard(){
    return(
        <div className = "completed-trip-card">
            <ProfilePreview/>
            <ProfilePreview/>
            <ProfilePreview/>
            <ProfilePreview/>
        </div>
    );
}

export default CompletedTripCard