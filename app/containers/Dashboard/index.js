/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AppLayout from 'components/AppLayout';
import Button from 'components/Button';
import CardProfile from 'components/CardProfile';
import CardRaces from 'components/CardRaces';
import { Tabs } from 'antd';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        {/* Profole submit run goes here*/}
        <CardProfile />
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Current Races" key="1">
              <CardRaces />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Past Races" key="2">Past Races</Tabs.TabPane>
          </Tabs>
        </div>
      </AppLayout>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Dashboard);
