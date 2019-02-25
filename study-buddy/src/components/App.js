import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../actions';
import './App.css';

import Nav from './nav';
import Home from './home';
import MapPage from './mapPage';
import MeetupPage from './meetupPage';
import Footer from './footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="appContainer">
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" Component={Home} />
            <Route exact path="/map" Component={mapPage} />
            <Route exact path="/meetup" Component={meetupPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);