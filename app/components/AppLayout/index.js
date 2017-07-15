/**
*
* AppLayout
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import appConfig from 'appConfig';
import H1 from 'components/H1';
import AppBar from 'components/AppBar';

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

const ContentWrapper = styled(Content)`  
  background: #aaa;
  padding: 24;
  margin: 0;
  overflow:auto;
`;
class AppLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {

  }

  render() {
    return (
        <Layout style={{height:'100vh', marginBottom:-64}}>
          <Sider width={200} style={{ background: '#fff' }} >
              <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1" title={<span><Icon type="user" />subnav 1</span>}> <Icon type="user" />option1</Menu.Item>             
            </Menu>
          </Sider>
          
          <ContentWrapper >            
               {this.props.children}            
          </ContentWrapper>
          
        </Layout>
    );
  }
}

AppLayout.propTypes = {

};

export default AppLayout;
