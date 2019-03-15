import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class AddMeetupForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}>
        <label htmlFor="subject">Study Subject</label>
        <Field name="subject" id="subject" type="text" component="input" placeholder="Node.js" />
        <label htmlFor="time">Time</label>
        <Field name="time" id="time" type="text" component="input" placeholder="3pm" />
        <label htmlFor="place">Place</label>
        <Field name="place" id="place" type="text" component="input" placeholder="Prince Coffee" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMeetupForm'
})(AddMeetupForm);