/**
 *
 * OfferPage
 *
 */

import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Header from 'components/Header';
import { ListGroup, ListGroupItem } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOfferPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getOfferAttempt } from './actions';

const OfferContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: auto;
  max-width: 1000px;
  padding: 10px;
`;

const RequestsContainer = styled.div`
  margin: 10px auto;
  max-width: 1000px;
`;

/* eslint-disable react/prefer-stateless-function */
export class OfferPage extends React.Component {
  componentDidMount() {
    const { offerId } = this.props.match.params;
    this.props.getOffer(offerId);
  }

  render() {
    const { offer, atGetOffer } = this.props.offerPage;

    const offerName = atGetOffer || offer === null ? 'Loading' : offer.name;

    return (
      <div>
        <Helmet>
          <title>OfferPage</title>
          <meta name="description" content="Description of OfferPage" />
        </Helmet>
        <Header />
        <OfferContainer>
          <h1 className="display-3">{offerName}</h1>
          <h3>제안그룹: 사근동제일큰그룹</h3>
        </OfferContainer>
        <RequestsContainer>
          <ListGroup>
            {_.range(0, 20).map(idx => (
              <ListGroupItem key={idx}>100000원: 콘푸로스트사장</ListGroupItem>
            ))}
          </ListGroup>
        </RequestsContainer>
      </div>
    );
  }
}

OfferPage.propTypes = {
  getOffer: PropTypes.func,
  offerPage: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  offerPage: makeSelectOfferPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getOffer: offerId => dispatch(getOfferAttempt(offerId)),
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
