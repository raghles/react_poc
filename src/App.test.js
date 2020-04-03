import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Testing App Component', () => {
  const component = shallow(<App/>);
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have header role as banner', () => {
    expect(component.find('header').prop('role')).toEqual("banner")
  });
  it('should have section role as contentinfo', () => {
    expect(component.find('section').prop('role')).toEqual("contentinfo")
  });
});
