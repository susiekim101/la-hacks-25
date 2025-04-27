import CompletedTripsList from "../components/CompletedTripsList";
import InvitesList from "../components/InvitesList";
import UpcomingTripCard from "../components/UpcomingTripCard";
import style from "../css/login.module.css"
import Photo from "../components/ProfilePhoto";
import HStack from '../components/HStack';
import "../css/ProfileTab.css";
import StartTripButton from './StartTripButton';


const Spacer = ({ width = '1rem' }: { width?: string }) => {
  return (
    <div style={{ width }} />
  );
};

const VerticalSpacer = ({ height = '1rem' }: { height?: string }) => {
  return (
    <div style={{ width: '0', height }} />
  );
};

function ProfileTab() {
  return (
    <div className="center">
    <div className="profile">
      <div className="profile-top">
        
        <HStack
            spacing="4 rem" 
            alignItems="center" 
          >
        
         <Photo/>
         <div className={style.vstack}>
         <div className={style.fixed}>Tiffany Ngyuen</div>
         <div className={style.fixed}>UCLA</div>
        </div>
         
        <Spacer width="19rem" />
        
        <div className="emissions-rank">
          <div className={style.fixed2}>Saved emissions: 5.88 lbs of co^2</div>
          <div className={style.fixed2}>Rank: Bronze</div>
        </div>
        </HStack>
      </div>
      

      <div className="personal-information">
        <p>Gender: Female </p>
        <p>Year: Sophomore </p>
        <p>Contact info: tiffanytran@ucla.edu </p>
        <p>School: UCLA</p>
      </div>

      <StartTripButton/>
      <VerticalSpacer height="2rem" /> 
      <div className="leftpadding">
      <div className={style.fixed}>Trip Requests:</div>
      <InvitesList />
      <div className={style.fixed}>Ongoing Trips:</div>
      <UpcomingTripCard />
      <div className={style.fixed}>Completed Trips:</div>
      <CompletedTripsList/>
      </div>
    </div>
    </div>
  );
}

export default ProfileTab;
