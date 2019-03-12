import React from 'react';
import { shallow } from 'enzyme';
import { SideBarFooter } from '../SideBarFooter';

describe('SideBarFooter', () => {
  test('renders SideBarFooter', () => {
    const wrapper = shallow(<SideBarFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
