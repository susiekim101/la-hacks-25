import MatchButton from "./MatchButton.tsx";
import Descriptors from "./Descriptors.tsx";
import Tags from "./Tags.tsx";
import "../css/PotentialMatchCard.css";

function PotentialMatchCard() {
  return (
    <div className="card">
      <div className="section">
        {/* profile picture goes here*/}
        <h1>potential match name</h1>
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
        <Tags />
        <MatchButton />
      </div>
    </div>
  );
}

export default PotentialMatchCard;
