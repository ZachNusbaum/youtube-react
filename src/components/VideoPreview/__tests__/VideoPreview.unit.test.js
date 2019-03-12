import React from 'react';
import { shallow } from 'enzyme';
import { VideoPreview } from '../VideoPreview';

describe('VideoPreview', () => {
  const wrapper = shallow(<VideoPreview />);
  expect(wrapper).toMatchSnapshot();
});
