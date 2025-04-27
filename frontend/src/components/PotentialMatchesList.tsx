import PotentialMatchCard from "./PotentialMatchCard.tsx";
import "./PotentialMatchesList.css";

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
