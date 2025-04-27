import NextFlightCard from "./NextFlightCard.tsx";
import Descriptors from "./Descriptors.tsx";
import "../css/SideProfile.css";

function SideProfile() {
  return (
    <>
      {/* put profile picture here*/}
      <h1>Tiffany</h1>
      <p>1000 tons of carbon saved // what 10 trees absorb in 1 year</p>
      <Descriptors />
      <div className="header-two">Bio</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="header-two">Next Flight</div>
      <NextFlightCard />
    </>
  );
}

export default SideProfile;
