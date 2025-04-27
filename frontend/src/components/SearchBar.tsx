import React, { useState, FormEvent, ChangeEvent } from 'react';
// No need for 'prop-types' library in TypeScript, we use interfaces/types instead.
import '../css/SearchBar.css'; // Import the CSS file for styling

// Define an interface for the component's props
interface SearchBarProps {
  placeholder?: string; // Optional prop, defaults will be handled in destructuring
  onSearch: (query: string) => void; // Required prop: a function that takes a string and returns nothing
}

// Use React.FC (Functional Component) and pass the props interface
const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  // State to hold the current value of the input field
  const [query, setQuery] = useState<string>(''); // Explicitly type useState

  // Function to handle changes in the input field
  // Explicitly type the event parameter
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Function to handle the form submission (or button click)
  // Explicitly type the event parameter
  const handleSearch = (event?: FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    if (event) {
      event.preventDefault();
    }
    // Call the onSearch prop function passed from the parent component,
    // passing the current query. Trim whitespace.
    // TypeScript now knows onSearch expects a string.
    onSearch(query.trim());

    // You might want to clear the query after search, or keep it
    // setQuery(''); // Optional: Clear input after search
  };

  return (
    // Pass the onSubmit handler to the form element
    <form className="search-bar-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-label="Search" // Accessibility improvement
      />
      <button type="submit" className="search-button" aria-label="Submit search">
         {/* SVG icon remains the same */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
    </form>
  );
};

// Default props can be set here if not handled via destructuring defaults,
// but the destructuring method is often cleaner.
// SearchBar.defaultProps = {
//   placeholder: "Search..."
// };

export default SearchBar;