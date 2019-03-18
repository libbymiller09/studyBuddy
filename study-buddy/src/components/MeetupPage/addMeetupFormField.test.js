import React from 'react';
import {shallow, mount} from 'enzyme';

import AddMeetupFormField from './addMeetupFormField';

describe('<AddMeetupFormField />', () => {
  it('Renders without crashing', () => {
      shallow(<AddMeetupFormField />);
  });
});