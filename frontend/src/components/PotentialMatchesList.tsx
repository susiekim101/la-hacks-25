import PotentialMatchCard from "./PotentialMatchCard.tsx";
import "../css/PotentialMatchesList.css";

function PotentialMatchesList() {
  return (
    <div className="potential-matches-list">
      <PotentialMatchCard />
      <PotentialMatchCard />
      <PotentialMatchCard />
      <PotentialMatchCard />
      <PotentialMatchCard />
    </div>
  );
}
export default PotentialMatchesList;
