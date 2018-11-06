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
// import styled from 'styled-components';

import { Jumbotron, Button } from 'reactstrap';

import Header from 'components/Header';
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
export default class HomePage extends React.Component {
  state = {
    offers: [
      {
        key: 1,
        name: '콘푸로스트-200kg',
        reqNum: 30,
      },
      {
        key: 2,
        name: '쌀-1000kg',
        reqNum: 25,
      },
      {
        key: 3,
        name: '김치-30000kg',
        reqNum: 3,
      },
      {
        key: 4,
        name: '과제대신해주는로봇',
        reqNum: 65,
      },
      {
        key: 5,
        name: '호랑이기운',
        reqNum: 12,
      },
    ],
    currentPage: 1,
  };

  handleClickOffer(offer) {
    alert(`Clicked ${offer.name}`);  // eslint-disable-line
  }

  render() {
    const { offers, currentPage } = this.state;
    return (
      <div>
        <Header />
        <JumboSection />
        <ListSection
          offers={offers}
          currentPage={currentPage}
          pageSize={5}
          paginationSize={5}
          onClickOffer={offer => this.handleClickOffer(offer)}
          onClickPagination={val => this.setState({ currentPage: val })}
        />
        <Jumbotron>
          <h5>author: smilu97, clarycha</h5>
        </Jumbotron>
      </div>
    );
  }
}
