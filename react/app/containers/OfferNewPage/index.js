/**
 *
 * OfferNewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOfferNewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OfferNewPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>OfferNewPage</title>
          <meta name="description" content="Description of OfferNewPage" />
        </Helmet>
      </div>
    );
  }
}

OfferNewPage.propTypes = {
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
};

const mapStateToProps = createStructuredSelector({
  offerNewPage: makeSelectOfferNewPage(),
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

const withReducer = injectReducer({ key: 'offerNewPage', reducer });
const withSaga = injectSaga({ key: 'offerNewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OfferNewPage);
