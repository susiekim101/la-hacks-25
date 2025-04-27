import InviteCard from "./InviteCard.tsx";
import "../css/InvitesList.css";
import HStack from '../components/HStack';

function InvitesList(){
    return(
        <div className = "invite-list">
            <HStack
            spacing="2rem" 
            alignItems="center" 
          >
            <InviteCard/>
            <InviteCard/>
            </HStack>

          

        </div>
    );
}
export default InvitesList