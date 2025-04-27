import FilterButton from "./FilterButton.tsx";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      {/* put search bar  icon*/}
      <p className="search-bar-text">search</p>
      <div className = "filter-button">
        <FilterButton />
      </div>
    </div>
  );
}
export default SearchBar;
