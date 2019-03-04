import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AddMeetupFormField from './addMeetupFormField';
import formFields from './formFields';

class AddMeetupForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} component={AddMeetupFormField} type="text" label={label} name={name} />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {this.renderFields()}
          <Link to="/meetups">
            Cancel
          </Link>
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Please provide a value!';
    }
  });

  return errors;
}

export default reduxForm({
  validate, 
  form: 'addMeetupForm',
  destroyOnUnmount: false
})(AddMeetupForm);