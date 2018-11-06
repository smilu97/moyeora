/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Header from 'components/Header';
import BillboardChart from 'react-billboardjs';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Alert } from 'reactstrap';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import RegisterForm from './RegisterForm';
import { registerUserGroupAttempt, closeAlertMessage } from './actions';

const RegisterAlert = styled(Alert)`
  margin: 0 auto;
  max-width: 1000px;
`;

const CHART_DATA = {
  columns: [
    ['data1', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220],
    ['data3', 300, 200, 160, 400, 250, 250],
  ],
  type: 'line',
};

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.Component {
  state = {
    name: '',
    group: '',
  };

  handleClickRegister() {
    const { name, group } = this.state;
    this.props.registerUserGroup(name, group);
  }

  render() {
    const { name, group } = this.state;
    const {
      scRegisterGroup,
      alertMessage,
      alertClosed,
    } = this.props.registerPage;
    return (
      <div>
        <Header />
        <RegisterAlert
          color={scRegisterGroup === false ? 'danger' : 'primary'}
          isOpen={alertMessage !== null && alertClosed === false}
          toggle={() => this.props.closeAlertMessage()}
        >
          {alertMessage}
        </RegisterAlert>
        <RegisterForm
          name={name}
          group={group}
          onChangeName={e => this.setState({ name: e.target.value })}
          onChangeGroup={e => this.setState({ group: e.target.value })}
          onClickRegister={() => this.handleClickRegister()}
        />
        <BillboardChart data={CHART_DATA} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  registerUserGroup: PropTypes.func,
  closeAlertMessage: PropTypes.func,
  registerPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    registerUserGroup: (user, group) =>
      dispatch(registerUserGroupAttempt(user, group)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
