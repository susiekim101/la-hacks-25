import CompletedTripsList from "../components/CompletedTripsList";
import InvitesList from "../components/InvitesList";
import UpcomingTripCard from "../components/UpcomingTripCard";
import "../css/ProfileTab.css";

function ProfileTab() {
  return (
    <div className="profile">
      <div className="profile-top">
        <div className="name-picture">
          <p>picture</p>
          <p>name</p>
          <p>school</p>
        </div>
        <div className="emissions-rank">
          <p>saved emissions: 5.88 lbs of co^2</p>
          <p>rank: bronze</p>
        </div>
      </div>
      <div className="personal-information">
        <p>gender: female </p>
        <p>year: sophomore </p>
        <p>contact info: tiffanytran@ucla.edu </p>
        <p>school: ucla</p>
      </div>
      <h2>Invites:</h2>
      <InvitesList />
      <h2>Upcoming Trips:</h2>
      <UpcomingTripCard />
      <h2>Completed Trips:</h2>
      <CompletedTripsList />
    </div>
  );
}

export default ProfileTab;
