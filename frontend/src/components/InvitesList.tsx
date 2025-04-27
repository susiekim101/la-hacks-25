import InviteCard from "./InviteCard.tsx";
import "../css/InvitesList.css";

function InvitesList(){
    return(
        <div className = "invite-list">
            <InviteCard/>
            <InviteCard/>
            <InviteCard/>
            <InviteCard/>
            <InviteCard/>
        </div>
    );
}
export default InvitesList