import NextFlightCard from "./NextFlightCard.tsx";
import Descriptors from "./Descriptors.tsx";

function SideProfile() {
  return (
    <>
      {/* put profile picture here*/}
      <h1>'name'</h1>
      <h2>Bio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h2>Next Flight</h2>
      <NextFlightCard />
      <h2>About Me</h2>
      <Descriptors />
    </>
  );
}

export default SideProfile;
