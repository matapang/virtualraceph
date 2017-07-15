/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Layout} from 'antd';
import AppBar from 'components/AppBar'
import withProgressBar from 'components/ProgressBar';
import 'tachyons/css/tachyons.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/app.less';

import appConfig from 'appConfig';

const AppWrapper = styled.div`
  max-width: calc(1180px + 16px * 2);
  margin-left:auto;
  margin-right:auto;
  width:100%;
`;

export function App(props) {
  return (
    <Layout style={{height:'100vh', overflow:'auto'}}>
      <AppBar />
      <Helmet
        titleTemplate={`%s - ${appConfig.title}`}
        defaultTitle={appConfig.title}
        meta={[
          { name: 'description', content: appConfig.title },
        ]}
      />        
      <AppWrapper>
      {React.Children.toArray(props.children)}      
      </AppWrapper>
      
    </Layout>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
