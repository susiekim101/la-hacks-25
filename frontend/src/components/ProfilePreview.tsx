import "../css/ProfilePreview.css";

function ProfilePreview(){
    return(
        <div className = "profile-preview">
            <div className = "pfp-preview">
                <h1>"[PFP]"</h1>
            </div>
            <div className = "name-preview">
                <h1>name</h1>
                <p>Rank: silver</p>
                <p>10 carbon saved</p>
            </div>
        </div>
    );
}

export default ProfilePreview