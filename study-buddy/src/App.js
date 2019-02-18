import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header>
          <h1><Link to="/">StudyBuddy</Link></h1>
        </header>
        <main>
          <Route exact path="/" Component={Home} />
          <Route exact path="/map" Component={map-page} />
          <Route exact path="/meetup" Component={meetup-page} />
          <Route path ="/" Component={nav} />
        </main>
      </div>
    </Router>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
