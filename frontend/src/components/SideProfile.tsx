import NextFlightCard from "./NextFlightCard.tsx";
import Descriptors from "./Descriptors.tsx";
import profileImage from "../assets/images/jnpfp.jpeg";
import "../css/SideProfile.css";

function SideProfile() {
  return (
    <>
      <div className="side-profile">
        <div className="profile-container">
          <div className="profile-image">
            <img src={profileImage} alt="Profile Photo" />
          </div>
          <div className="profile-text">
            <h2>Tiff_N</h2>
            <p>1000 tons of carbon saved // what 10 trees absorb in 1 year</p>
          </div>
        </div>
        <Descriptors />
        <div className="header-two">Bio</div>
        <p>
          Hi! I'm a Biz-econ major, you should connect with me on LinkedIn. In
          my free time, I enjoy creating my own boba and going to raves.
        </p>
        <div className="header-two">Next Flight</div>
        <NextFlightCard />
      </div>
    </>
  );
}

export default SideProfile;
