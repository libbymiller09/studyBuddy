import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AddMeetupFormField from './addMeetupFormField'; 
import formFields from './formFields';
// import '../../float.grid.css';
// import{ FormSubmit } from '../../actions';


class AddMeetupForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field classname="formInputs" key={name} component={AddMeetupFormField} type="text" label={label} name={name} />
      );
    });
  }
  render() {
    return (
      <div>
        <form 
          // onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
        >
          {this.renderFields()}
          {/* <Link to="/meetups">
            Cancel
          </Link> */}
          <button type="submit">
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addMeetupForm',
  destroyOnUnmount: false
})(AddMeetupForm);



// import React from 'react';
// import { reduxForm, Field } from 'redux-form';

// export class AddMeetupForm extends React.Component {
//   onSubmit(values) {
//     console.log(values);
//     return fetch('/meetups', {
//       method: 'POST',
//       body: JSON.stringify(values),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(res => res.json())
//     .then(response => console.log('Success'))
//     .catch(error => console.error('error'));
//   }

//   render() {
//     return (
//       <form 
//         onSubmit={this.props.handleSubmit(values => 
//           this.onSubmit(values)
//         )}>
//         <label htmlFor="subject">Study Subject</label>
//         <Field name="subject" id="subject" type="text" component="input" placeholder="Node.js" />
//         <label htmlFor="time">Time</label>
//         <Field name="time" id="time" type="text" component="input" placeholder="3pm" />
//         <label htmlFor="place">Place</label>
//         <Field name="place" id="place" type="text" component="input" placeholder="Prince Coffee" />
//         <button 
//           type="submit"
//           className="submitButton"
//           disabled={
//             this.props.pristine ||
//             this.props.submitting
//           }>
//           Add
//         </button>
//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: 'addMeetupForm'
// })(AddMeetupForm);