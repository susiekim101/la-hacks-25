import MatchButton from "./MatchButton.tsx";
import Descriptors from "./Descriptors.tsx";
import Tags from "./Tags.tsx";

function PotentialMatchCard() {
  return (
    <>
      {/* profile picture goes here*/}
      <h1>potential match name</h1>
      <p>100 carbon saved</p>
      <Descriptors />
      <p>
        Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <Tags />
      <MatchButton />
    </>
  );
}

export default PotentialMatchCard;
