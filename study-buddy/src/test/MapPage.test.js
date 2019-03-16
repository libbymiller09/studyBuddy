import React from 'react';
import ReactDOM from 'react-dom';
import MapPage from '../components/MapPage/mapPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});