/**
 *
 * OfferPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOfferPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OfferPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>OfferPage</title>
          <meta name="description" content="Description of OfferPage" />
        </Helmet>
        <Header />
      </div>
    );
  }
}

OfferPage.propTypes = {
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
};

const mapStateToProps = createStructuredSelector({
  offerPage: makeSelectOfferPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'offerPage', reducer });
const withSaga = injectSaga({ key: 'offerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OfferPage);
