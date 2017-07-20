/*
 *
 * Races
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppLayout from 'components/AppLayout';
import raceRoutes from './routes';

export class Races extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderRaces() {
    const {id} = this.props.params; 
    const page = raceRoutes[id];
    if (page != undefined) {
      return page();
    }
    return <h1>Ooops!. Race not found</h1>
  }

  render() {
    return (
      <AppLayout>
        {this.renderRaces()}
      </AppLayout>
    );
  }
}

Races.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params:PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Races);
