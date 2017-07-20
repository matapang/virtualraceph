import React, { PropTypes } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import appConfig from 'appConfig';

import { Menu, Layout, Icon, Col } from 'antd';
import { Link } from 'react-router';
import DivShow from 'components/DivShow';

const Logo = styled.div`  
  width: 120px;
  height: 31px;
  background: #333;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
`;


const AppBar = (props) => {
    const { location } = props;
    const pathname = location.pathname;
    return (
        <Layout.Header className="header">
                <Logo />

            <DivShow aboveXs>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={pathname}
                    selectedKeys={pathname}
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="/races"> <Link to="/races"> <Icon type="calendar" /> Races</Link></Menu.Item>
                    <Menu.Item key="/feeds"><Link to="/feeds"> <Icon type="global" /> Feeds</Link></Menu.Item>
                    <Menu.Item key="/dashboard"> <Link to="/dashboard"> <Icon type="user" /> My Dashboard</Link></Menu.Item>
                </Menu>
            </DivShow>
        </Layout.Header>);
};

AppBar.propTypes = {
    location: PropTypes.object
}

export default AppBar;