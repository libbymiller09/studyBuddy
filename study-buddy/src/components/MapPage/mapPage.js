import React from 'react';
import MapContainer from './MapContainer';
import './MapPage.css';

// import Map from './map.js';
// import Modal from './modal';
// import SearchResults from './search-results';


class MapPage extends React.Component {
  render() {
    return (
      <div>
        <div className="mapComponent">
        <h2>Search the map!</h2>
         <MapContainer />
          {/* <form className="search-map-form">
            <div>
              <label>Search</label>
              <input placeholder="North Portland" type="text" name="search" id="search" />
            </div>
            <button type="submit" className="submitButton">Go</button>
          </form> */}
        </div>
      </div>
    );
  }
}

export default  MapPage;