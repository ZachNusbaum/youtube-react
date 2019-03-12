import React from 'react';
import { shallow } from 'enzyme';
import { Subscription } from '../Subscription/Subscription';

describe('Subscriptions', () => {
  test('renders list of subscriptions', () => {
    const wrapper = shallow(<Subscription />);
    expect(wrapper).toMatchSnapshot();
  });
});
