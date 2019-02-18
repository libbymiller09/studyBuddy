import React from 'react';

export class MapSearchBar extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return 
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="search">Search</label>
        <Field name="search" id="search" type="text" Component="search-bar-input" />
        <button type="submit">Go</button>
      </form>
  }
}

export default reduxForm({
  form: 'map-search-bar'
})(MapSearchBar);