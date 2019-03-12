import React from 'react';
import { Menu, Image, Form, Input } from 'semantic-ui-react';
import logo from '../../assets/images/logo.jpg';
import './HeaderNav.scss';

export const HeaderNav = () => (
  <Menu borderless className="top-menu" fixed="top">
    <Menu.Item header className="logo">
      <Image src={logo} size="tiny" />
    </Menu.Item>
    <Menu.Menu className="nav-container">
      <Menu.Item className="search-input">
        <Form>
          <Form.Field>
            <Input placeholder="search" size="small" action="Go" />
          </Form.Field>
        </Form>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
