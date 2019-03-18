import React from 'react';
import {shallow, mount} from 'enzyme';

import MeetupList from './meetupList';

describe('<MeetupList />', () => {
  it('Renders without crashing', () => {
      shallow(<MeetupList meetups ={[]}/>);
  });

  it('Renders a list of meetups', () => {
    const values = ['Test subject', 'test, time', 'test place'];
    const wrapper = shallow(<MeetupList />);
    const items = wrapper.find('h3');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});