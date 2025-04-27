import ProfilePreview from "./ProfilePreview.tsx";
import AcceptInviteButton from "./AcceptInviteButton.tsx";

function InviteCard(){
    return(
        <div className = "invite-card">
            <div className = "profile-preview">
                <ProfilePreview/>
            </div>
            <div className = "accept-invite">
                <AcceptInviteButton/>
            </div>
        </div>
    );
}

export default InviteCard
