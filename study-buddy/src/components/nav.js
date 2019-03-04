import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Home from './home';
import MapPage from './MapPage/mapPage';
import MeetupPage from './MeetupPage/meetupPage';

// import './nav.css';

class Nav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return [
          <li key="3"><Home /></li>,
          // <li key="4"><MapPage /></li>,
          // <li key="2"><MeetupPage /></li>,
          <li key="1"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div>
          <Link to={this.props.auth ? '/map' : '/'}
          >
          Study Buddy
          </Link>
          <ul>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Nav);