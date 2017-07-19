/*
 *
 * Feeds
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import messages from './messages';
import AppLayout from 'components/AppLayout';
import CardPostFeed from 'components/CardPostFeed';

export class Feeds extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        <Helmet
          title="Feeds"
          meta={[
            { name: 'Feeds', content: 'Runner Feeds' },
          ]}
        />
        <CardPostFeed />

      </AppLayout>
    );
  }
}

Feeds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Feeds);
