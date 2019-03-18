import React from 'react';
import Link from 'react-router-dom';
import {shallow, mount} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });

  // it('Renders the link tags initially', () => {
  //   const wrapper = shallow(<Nav />);
  //   expect(wrapper.contains(<li>{Link}</li>)).toEqual(true);
  // });
});