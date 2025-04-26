// import {SideProfile, SearchBar, PotentialMatchesList} from components
import SideProfile from '../components/SideProfile.tsx';
import SearchBar from '../components/SearchBar.tsx';
import PotentialMatchesList from '../components/PotentialMatchesList.tsx';

function Feed() {
    return(
        <>
            <SideProfile/>
            <SearchBar/>
            <PotentialMatchesList/>
        </>
    )
}

export default Feed