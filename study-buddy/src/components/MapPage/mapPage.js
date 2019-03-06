import React from 'react';

// import Map from './map.js';
// import Modal from './modal';
// import SearchResults from './search-results';


class MapPage extends React.Component {
  render() {
    return (
      <div>
        <div className="map component">
         <img src="https://www.maptiler.com/img/map-home.svg" />
          <h2>Search the map!</h2>
          <form class="search-map-form">
            <div>
              <label for="search">Search</label>
              <input placeholder="North Portland" type="text" name="search" id="search" />
            </div>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    );
  }
}

export default  MapPage;