import React from 'react';
import './Home.css';
import '../float.grid.css';

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
          <p>  Finding people to study with is hard.</p>
          
          <p>  With this application, easily find and connect with 'Study Buddies' near you!</p>
        
          <h3> You can... </h3>

          <h2>Checkout the Map!</h2>

          <p>  See if there are any peers meeting in your area! Meetups are shown with handy markers. </p>

          <h2> Or checkout the listed meetups!</h2> 
          
          <p> To find or host study sessions!</p>

          <h2>Look for a Buddy now!</h2>

          <p> Start by clicking the login button!   Then click Map or Meetups.</p>

        </div>
      </div>
    );
  }
}

export default Home;