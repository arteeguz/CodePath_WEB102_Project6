import React, { useState } from 'react';

// Component for the search bar that allows users to search through the data
function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  return (
    <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search cities..."
      />
      <button onClick={() => onSearch(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
