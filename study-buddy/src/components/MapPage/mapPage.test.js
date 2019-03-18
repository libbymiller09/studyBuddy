import React from 'react';
import {shallow, mount} from 'enzyme';

import MapPage from './mapPage';

describe('<MapPage />', () => {
  it('Renders without crashing', () => {
      shallow(<MapPage />);
  });

  it('Renders the map initially', () => {
    const wrapper = shallow(<MapPage />);
    expect(wrapper.hasClass('mapComponent')).toEqual(true);
  });

  // it('Should fire onSubmit callback when form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<MapPage onSubmit={callback} />);
  //   const value = 'Test Test';
  //   wrapper.find('input[type="text"]').instance().value = value;
  //   wrapper.simulate('submit');
  //   expect(callback).toHaveBeenCalledWith(value);
  // });

  // it('Should reset the form after it is submitted', () => {
  //   const wrapper = mount(<MapPage />);
  //   const input = wrapper.find('input[type="text"]');
  //   input.instance().value = 'Test Test';
  //   wrapper.simulate('submit');
  //   expect(input.instance().value).toEqual('');
  // });
});