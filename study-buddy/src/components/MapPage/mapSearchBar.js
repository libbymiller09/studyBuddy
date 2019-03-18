import React from 'react';
import { reduxForm, Field } from 'redux-form';

// import Input from './input'

export class MapSearchBar extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return 
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="search">Search</label>
        <Field name="search" id="search" type="text" Component="input" />
        <button type="submit"
          disabled={
            this.props.pristine ||
            this.props.submitting
          }>
          Go
        </button>
      </form>
  }
}

export default reduxForm({
  form: 'map-search-bar'
})(MapSearchBar);