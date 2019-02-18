import React from 'react';

import SearchResultsItem from './search-results-item';

export default function SearchResults(props) {
  return (
    <div>
      <h3>Search Results</h3>
      <ul className="searchResults">
        <li>
          <SearchResultsItem />
        </li>
      </ul>
    </div>
  );
}