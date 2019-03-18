import React from 'react';
import {shallow, mount} from 'enzyme';

import MapSearchBar from './mapSearchBar';

describe('<MapSearchBar />', () => {
  it('Renders without crashing', () => {
      shallow(<MapSearchBar />);
  });
});