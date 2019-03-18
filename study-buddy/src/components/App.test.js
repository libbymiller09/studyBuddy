//not sure that i need a test for this component

import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});