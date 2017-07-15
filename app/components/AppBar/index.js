import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import appConfig from 'appConfig';

import { Menu, Layout } from 'antd';

const Logo = styled.div`  
  width: 120px;
  height: 31px;
  background: #333;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
`;

const AppBar = () => {
    return (
        <Layout.Header className="header">
            <Logo />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px', float:'right' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Layout.Header>);
}

export default AppBar;