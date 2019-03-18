import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetups } from '../../actions';
// import AddMeetupForm from './addMeetupForm';

class MeetupList extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }
  renderMeetups() {
    return this.props.meetups.reverse().map(meetup => {
      return (
        <div key={meetup._id} >
          <div className="meetupContent">
            <h3 className="subject">Subject: {meetup.subject}</h3>
            <h3 className="time">Time: {meetup.time}</h3>
            <h3 className="place">Place: {meetup.place}</h3>
          </div>
          <button className="check-toggle" type="button">Completed</button>
        </div>
      );
    });
  }
    

  render() {
    return (
      <div>
        <h2>Current Scheduled Meetups</h2>
        <div className="meetupListContainer">
          {this.renderMeetups()}      
        </div>
      </div>
    );
  }
}

function mapStateToProps({ meetups }) {
  return { meetups };
}

export default connect(mapStateToProps, { fetchMeetups })(MeetupList);