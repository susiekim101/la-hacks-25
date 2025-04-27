import ProfilePreview from "./ProfilePreview.tsx";
import "../css/UpcomingTripCard.css";
import style from "../css/login.module.css";   
import HStack from '../components/HStack';

function UpcomingTripCard(){
    return(
        
        <div className={style.ongoingCardContainer}>
        <HStack
            spacing="0rem"
            alignItems="center"
        >
            <ProfilePreview />

            <div className={style.kevin}>kevinn@ucla.edu</div>
            
        </HStack>
        
        
</div>
    );
}

export default UpcomingTripCard