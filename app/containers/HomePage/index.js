/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import{connect} from 'react-redux';
import AppLayout from 'components/AppLayout';
import FormLogin from 'components/FormLogin';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }
  
  render() {
    return (<div style={{margin:"10% 20% 0 20%"}}>
              <FormLogin/>
            </div>);
  }
}

HomePage.propTypes = {
 
};

export function mapDispatchToProps(dispatch) {
  return {
   
  };
}

export function mapStateToProps(dispatch) {
  return {
   
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
