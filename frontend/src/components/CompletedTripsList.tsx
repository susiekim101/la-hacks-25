import CompletedTripCard from "./CompletedTripCard";
import "../css/CompletedTripsList.css";

function CompletedTripsList() {
  return (
    <div className="completed-trips-list">
      <CompletedTripCard />
      <CompletedTripCard />
      <CompletedTripCard />
    </div>
  );
}

export default CompletedTripsList;
