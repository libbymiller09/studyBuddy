import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchMeetups } from '../../actions';
// import AddMeetupForm from './add-meetup-form';

class MeetupPage extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }
  renderMeetups() {
    return this.props.meetups.reverse().map(meetup => {
      return (
        <div key={meetup._id} >
          <div className="meetupContent">
            <h3 className="subject">Subject: {meetup.subject}</h3>
            <h4 className="time">Time: {meetup.time}</h4>
            <h4 className="place">Place: {meetup.place}</h4>
          </div>
        </div>
      );
    });
  }
    

  render() {
    return (
      <div>
        {this.renderMeetups()}
      </div>
    );
  }
}

function mapStateToProps({ meetups }) {
  return { meetups };
}

export default connect(mapStateToProps, { fetchMeetups })(MeetupPage);

// export default function MeetupPage(props) {
//   return (
//     <div>
//       <section>
//         <h3>Current Scheduled Meetups</h3>
//         <div className="meetups-list">
//           <li>
//             Meetup list
//           </li>
//         </div>
//       </section>

//       <section>
//         <header>
//           <h3>Add your own meetup!</h3>
//           </header>
//           <form className="add-meetup-form">
//             <AddMeetupForm />
//           </form>
//       </section>
//     </div>
//   );
// }