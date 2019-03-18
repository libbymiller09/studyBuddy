import React from 'react';
import {shallow, mount} from 'enzyme';

import AddMeetupForm from './addMeetupForm';

describe('<AddMeetupForm />', () => {
  it('Renders without crashing', () => {
      shallow(<AddMeetupForm />);
  });

  it('Renders the add button initially', () => {
    const wrapper = shallow(<AddMeetupForm />);
    expect(wrapper.hasClass('submitButton')).toEqual(true);
  });

  it('Should fire onSubmit callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<AddMeetupForm onSubmit={callback} />);
    const value = 'Test Test';
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });

  it('Should reset the form after it is submitted', () => {
    const wrapper = mount(<AddMeetupForm />);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 'Test Test';
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});