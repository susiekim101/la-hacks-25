import "../css/NextFlightCard.css";

function NextFlightCard() {
  return (
    <div className="next-flight-card">
      <div className="topSection">
        {/* <img alt="Delta Airlines" className="airlineLogo" /> */}
        <div className="airlineLogoPlaceholder"></div>
        <div className="flightInfo">
          <div className="airlineName">Delta</div>
          <div className="flightNumber">Flight D1234</div>
        </div>
      </div>

      <div className="flight-info">
        <div className="column">
          <p className="columnHeading">Departing Flight</p>
          <p className="airportCode">BOS</p>
          <p className="airportName">Logan Airport</p>
          <p className="date"> 4/26/2025</p>
          <p className="time">2:31pm</p>
          <p className="timezone">Local Time</p>
        </div>
        <div className="column">
          <p className="columnHeading">Arriving Flight</p>
          <p className="airportCode">LAX</p>
          <p className="airportName">Los Angeles Airport</p>
          <p className="date">4/26/2025</p>
          <p className="time">5:15pm</p>
          <p className="timezone">Local Time</p>
        </div>
      </div>
    </div>
  );
}

export default NextFlightCard;
