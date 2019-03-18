import React from 'react';
import {shallow, mount} from 'enzyme';

import MapPage from './mapPage';

describe('<MapPage />', () => {
  it('Renders without crashing', () => {
      shallow(<MapPage />);
  });
});