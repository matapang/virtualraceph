/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppLayout from 'components/AppLayout';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        This is the user dashboard
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
