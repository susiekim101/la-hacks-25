import CompletedTripsList from "../components/CompletedTripsList";
import InvitesList from "../components/InvitesList";
import UpcomingTripCard from "../components/UpcomingTripCard";


function Profile(){
    return(
        <>
            <InvitesList/>
            <UpcomingTripCard/>
            <CompletedTripsList/>
        </>
    );
}

export default Profile