import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import FormSubmitRun from 'components/FormSubmitRun';
import AppLayout from 'components/AppLayout';
import { connect } from 'react-redux';

export class SubmitRun extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (model) => {
    //TODO, call actual API for submit here
    this.props.dispatch(push("/feeds"));
  }

  render() {
    return (
      <AppLayout>
        <FormSubmitRun onSubmit={this.onSubmit} />
      </AppLayout>
    );
  }
}

SubmitRun.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SubmitRun);
