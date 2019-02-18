import React from 'react';
import addMeetupButton from './add-meetup-button';
import addMeetupInput from './add-meetup-input';
import addMeetupLabel from './add-meetup-label';

export class AddMeetupForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="subject">Study Subject</label>
        <Field name="subject" id="subject" type="text" component="add-meetup-input" />
        <label htmlFor="time">Time</label>
        <Field name="time" id="time" type="text" component="add-meetup-input" />
        <label htmlFor="place">Placee</label>
        <Field name="place" id="place" component="add-meetup-input" />
        <button type="submit">Add</button>
      </form>
        );
    }
}

export default reduxForm({
    form: 'add-meetup-form'
})(AddMeetupForm);
