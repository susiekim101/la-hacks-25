import "../css/NextFlightCard.css";
function NextFlightCard() {
  return (
    <div className="next-flight-card">
      <p>airline</p>
      <p>flight name</p>

      <div className="flight-info">
        <div className="departure">
          <p>departing flight</p>
          <p>BOS</p>
          <p>logan international airport</p>
          <p>4/26/2025</p>
          <p>2:31pm</p>
          <p>Local Time</p>
        </div>
        <div className="arrival">
          <p>arriving flight</p>
          <p>LAX</p>
          <p>los angeles international airport</p>
          <p>4/26/2025</p>
          <p>5:15pm</p>
          <p>Local Time</p>
        </div>
      </div>
    </div>
  );
}

export default NextFlightCard;
