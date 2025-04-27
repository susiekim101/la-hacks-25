import MatchButton from "./MatchButton.tsx";
import Descriptors from "./Descriptors.tsx";
import Tags from "./Tags.tsx";
import "../css/PotentialMatchCard.css";
import Photo from "../components/ProfilePhoto.tsx"
import style from "../css/login.module.css"

function PotentialMatchCard() {
  return (
    <div className="card">
      <div className="section">
      <div className={style.center}>
          <Photo/>
        </div>
        <div className="match-name">match name</div>
        <p>100 carbon saved</p>
      </div>
      <div className="section">
        <Descriptors />
      </div>
      <div className="section">
        <p>
          Biography: I like trains and cool cars.
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
