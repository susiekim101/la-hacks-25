import CompletedTripsList from "../components/CompletedTripsList";
import InvitesList from "../components/InvitesList";
import UpcomingTripCard from "../components/UpcomingTripCard";
import "../css/Profile.css";

function Profile(){
    return(
        <div className = "profile">
            <div className = "profile-top">
                <div className = "name-picture">
                    <h1>picture</h1>
                    <h1>name</h1>
                    <h1>school</h1>
                </div>
                <div className = "emissions-rank">
                    saved emissions: 5.88 lbs of co^2
                    rank: bronze
                </div>
            </div>
            <p>
                gender: female
                year: sophomore
                contact info: tiffanytran@ucla.edu
                Bio: hi i am bizecon major
            </p>
            <h2>Invites:</h2>
                <InvitesList/>
            <h2>Upcoming Trips:</h2>
                <UpcomingTripCard/>
            <h2>Completed Trips:</h2>
                <CompletedTripsList/>
        </div>
    );
}

export default Profile