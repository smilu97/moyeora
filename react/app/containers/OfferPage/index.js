/**
 *
 * OfferPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BillboardChart from 'react-billboardjs';

import Header from 'components/Header';
import { ListGroup, ListGroupItem } from 'reactstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOfferPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getOfferAttempt } from './actions';

import RequestForm from './RequestForm';

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

const RequestWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const RequestCost = styled.h3`
  font-size: 30px;
  font-weight: bold;
  height: 50px;
`;

const Requestor = styled.h3`
  font-size: 20px;
  color: #999;
  height: 50px;
`;

const ChartWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* eslint-disable react/prefer-stateless-function */
export class OfferPage extends React.Component {
  state = {
    requestName: '',
    requestCost: 0,
  };

  componentDidMount() {
    const { offerId } = this.props.match.params;
    this.props.getOffer(offerId);
  }

  renderRequests(requests) {
    if (requests === undefined || requests.length === 0) {
      return <h3>No Request</h3>;
    }

    return requests.map(req => (
      <ListGroupItem key={req.id}>
        <RequestWrapper>
          <RequestCost>{req.cost}원</RequestCost>
          <Requestor>제안자: {req.requestor}</Requestor>
        </RequestWrapper>
      </ListGroupItem>
    ));
  }

  render() {
    const { offer, atGetOffer } = this.props.offerPage;
    const { requestName, requestCost } = this.state;
    const offerName = atGetOffer || offer === null ? 'Loading' : offer.itemname;
    const groupname =
      atGetOffer || offer === null ? 'Loading' : offer.groupname;
    const requests = atGetOffer || offer === null ? [] : offer.requests;

    const CHART_DATA = {
      columns: [['costs', ...requests.map(r => r.cost)]],
      type: 'line',
    };

    return (
      <div>
        <Helmet>
          <title>OfferPage</title>
          <meta name="description" content="Description of OfferPage" />
        </Helmet>
        <Header />
        <OfferContainer>
          <h1 className="display-3">{offerName}</h1>
          <h3>제안그룹: {groupname}</h3>
        </OfferContainer>
        <RequestForm
          name={requestName}
          cost={requestCost}
          onChangeName={e => this.setState({ requestName: e.target.value })}
          onChangeCost={e => this.setState({ requestCost: e.target.value })}
          onClickRequest={() => null}
        />
        <ChartWrapper>
          <BillboardChart data={CHART_DATA} />
        </ChartWrapper>
        <RequestsContainer>
          <ListGroup>{this.renderRequests(requests)}</ListGroup>
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
