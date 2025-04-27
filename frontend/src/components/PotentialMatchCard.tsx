import MatchButton from "./MatchButton.tsx";
import Descriptors from "./Descriptors.tsx";
import Tags from "./Tags.tsx";
import "../css/PotentialMatchCard.css";
import ExamplePfP from "../assets/images/circle.png";

function PotentialMatchCard() {
  return (
    <div className="card">
      <div className="section">
        <div className="profile-image">
          <img src={ExamplePfP} alt="Profile Photo" />
        </div>
        <div className="match-name">match name</div>
        <p>100 carbon saved</p>
      </div>
      <div className="section">
        <Descriptors />
      </div>
      <div className="section">
        <p>
          Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="section">
        <MatchButton />
        <Tags />
      </div>
    </div>
  );
}

export default PotentialMatchCard;
