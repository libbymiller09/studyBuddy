import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
// import MeetupPage from './MeetupPage/meetupPage';

class Home extends React.Component {
  render() {
    return (
      <div className="landingContainer">
        <header>
          <h2>How to use this app!</h2>
        </header>
        <div>
          <h4>Finding people to study with is hard.</h4>

          <p>With this application, find and connect with 'Study Buddies' near you!</p>
        
          <h2>Search the Map!</h2>

          <h4>Check the map in your area.</h4>

          <h4> Or search for specific meetups!</h4>

          <h2>Look for a Buddy now!</h2>

        </div>
      </div>
    );
  }
}

export default Home;