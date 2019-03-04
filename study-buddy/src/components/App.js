import React, { Component } from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from './home';
import MapPage from './MapPage/mapPage';
import MeetupPage from './MeetupPage/meetupPage';
import Nav from './nav';
// import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route exact path="/" Component={Home} />
          <Route exact path="/map" Component={MapPage} />
          <Route exact path="/meetup" Component={MeetupPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);