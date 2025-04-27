// import {SideProfile, SearchBar, PotentialMatchesList} from components
import "../css/feed.css";
import SideProfile from "../components/SideProfile.tsx";
import SearchBar from "../components/SearchBar.tsx";
import PotentialMatchesList from "../components/PotentialMatchesList.tsx";
import HStack from '../components/HStack';

function Feed() {
  return (
    <div className="feed-container">
      <div className="side-content">
        <SideProfile />
      </div>
      <div className="main-content">
        <SearchBar />
        <PotentialMatchesList />
      </div>
    </div>
  );
}

export default Feed;
