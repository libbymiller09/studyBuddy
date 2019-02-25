import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import './App.css';

import Nav from './nav';
import Home from './home';

const MapPage = () => <h2>MapPage</h2>
const MeetupPage = () => <h2>MeetupPage</h2>
// import MapPage from './mapPage';
// import MeetupPage from './meetupPage';

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
            <Route exact path="/map" Component={MapPage} />
            <Route exact path="/meetup" Component={MeetupPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);