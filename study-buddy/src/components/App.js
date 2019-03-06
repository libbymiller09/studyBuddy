// import React, { Component } from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

// import Nav from './Nav';
// import Home from './Home';
// import MapPage from './MapPage/mapPage';
// import MeetupPage from './MeetupPage/meetupPage';

// // import './App.css';

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchUser();
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <div className="container">
//           <Nav />
//           <Route exact path="/" Component={Home} />
//           <Route exact path="/map" Component={MapPage} />
//           <Route exact path="/meetup" Component={MeetupPage} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default connect(null, actions)(App);



import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import Home from "./Home";
import MapPage from './MapPage/mapPage';
import MeetupPage from './MeetupPage/meetupPage';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapPage} />
            <Route path="/meetups" component={MeetupPage} />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);