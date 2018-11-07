/**
 *
 * OfferNewPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import { Alert } from 'reactstrap';
import BillboardChart from 'react-billboardjs';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOfferNewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { closeAlertMessage, postOfferAttempt } from './actions';

import PostOfferForm from './PostOfferForm';

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
export class OfferNewPage extends React.Component {
  state = {
    username: '',
    item: '',
  };

  handleClickPost(offer) {
    this.props.postOffer(offer);
  }

  render() {
    const { alertMessage, scPostOffer, alertClosed } = this.props.offerNewPage;
    const { username, item } = this.state;

    return (
      <div>
        <Helmet>
          <title>OfferNewPage</title>
          <meta name="description" content="Description of OfferNewPage" />
        </Helmet>
        <Header />
        <RegisterAlert
          color={scPostOffer === false ? 'danger' : 'primary'}
          isOpen={alertMessage !== null && alertClosed === false}
          toggle={() => this.props.closeAlertMessage()}
        >
          {alertMessage}
        </RegisterAlert>
        <PostOfferForm
          username={username}
          item={item}
          onChangeUsername={e => this.setState({ username: e.target.value })}
          onChangeItem={e => this.setState({ item: e.target.value })}
          onClickPost={() => this.handleClickPost()}
        />
        <BillboardChart data={CHART_DATA} />
      </div>
    );
  }
}

OfferNewPage.propTypes = {
  offerNewPage: PropTypes.object,
  closeAlertMessage: PropTypes.func,
  postOffer: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  offerNewPage: makeSelectOfferNewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeAlertMessage: () => dispatch(closeAlertMessage()),
    postOffer: offer => dispatch(postOfferAttempt(offer)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'offerNewPage', reducer });
const withSaga = injectSaga({ key: 'offerNewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OfferNewPage);
