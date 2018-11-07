/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

// import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import connect from 'react-redux/lib/connect/connect';
import { compose } from 'redux';
import history from 'utils/history';

import { Jumbotron, Button } from 'reactstrap';
import Header from 'components/Header';
import makeSelectHomePage from './selectors';
import { getOffersAttempt } from './actions';
import reducer from './reducer';
import saga from './saga';

import ListSection from './ListSection';

function JumboSection() {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, World!</h1>
      <p className="lead">
        This is toy project for learning various open-source projects, react,
        node.js, nginx, express, docker, etc... <br />
        You can see, and modify some dummy data, that is consist of fake auction
        logs.
      </p>
      <hr className="my-2" />
      <p>
        All of the data in this site was made from Faker library, also are
        fictional.
      </p>
      <p className="lead">
        <Button
          onClick={() => {
            window.location = 'https://github.com/smilu97/moyeora';
          }}
          color="primary"
        >
          Go github
        </Button>
      </p>
    </Jumbotron>
  );
}

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getOffers(1, 5);
  }

  handleClickOffer(offer) {
    history.push(`/offer/${offer.key}`);
  }

  handleClickPagination(page) {
    this.props.getOffers(page, 5);
  }

  render() {
    const { offers, currentPage, offerNum } = this.props.homePage;
    return (
      <div>
        <Header />
        <JumboSection />
        <ListSection
          offers={offers}
          currentPage={currentPage}
          offerNum={offerNum}
          paginationSize={5}
          onClickOffer={offer => this.handleClickOffer(offer)}
          onClickPagination={page => this.handleClickPagination(page)}
          onClickOfferNew={() => history.push('/offernew')}
        />
        <Jumbotron>
          <h5>author: smilu97, clarycha in HYU</h5>
        </Jumbotron>
      </div>
    );
  }
}

HomePage.propTypes = {
  getOffers: PropTypes.func,
  homePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getOffers: (page, pageSize) => dispatch(getOffersAttempt(page, pageSize)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
