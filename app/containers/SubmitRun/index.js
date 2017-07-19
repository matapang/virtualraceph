import React, { PropTypes } from 'react';
import FormSubmitRun from 'components/FormSubmitRun';
import AppLayout from 'components/AppLayout';
import {Row, Col, Card} from 'antd';
import { connect } from 'react-redux';

export class SubmitRun extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        <Row>
          <Col xs={24} sm={18} md={15}>
            <Card>
              <FormSubmitRun />
            </Card>
          </Col>
        </Row>
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
