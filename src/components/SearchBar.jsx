import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-md mb-6">
      <input
        className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
