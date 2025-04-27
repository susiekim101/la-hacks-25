import FilterButton from "./FilterButton.tsx";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      {/* put search bar  icon*/}
      <p>search</p>
      <FilterButton />
    </div>
  );
}
export default SearchBar;
