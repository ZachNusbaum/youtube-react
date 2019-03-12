import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo.jpg';
import './HeaderNav.scss';

export const HeaderNav = () => (
  <Menu borderless className="top-menu" fixed="top">
    <Menu.Item header className="logo">
      <Image src={logo} size="tiny" />
    </Menu.Item>
    <Menu.Menu>{/* TODO */}</Menu.Menu>
  </Menu>
);
