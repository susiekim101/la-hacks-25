import "../css/ProfilePreview.css";

function ProfilePreview(){
    return(
        <div className = "profile-preview">
            <div className = "pfp-preview">
                <p>"[PFP]"</p>
            </div>
            <div className = "name-preview">
                <p>name</p>
                <p>Rank: silver</p>
                <p>10 carbon saved</p>
            </div>
        </div>
    );
}

export default ProfilePreview