import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddMeetupForm from './addMeetupForm';

class NewMeetup extends Component {
  state = {};

  renderContent() {
    return (
      <AddMeetupForm 
        onFormSubmit={() => this.setState({ })} 
      />    
    );
  }

  render() {
    return ( 
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addMeetupForm'
})(NewMeetup);