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

import React from 'react';
import styled from 'styled-components';

import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const TitleText = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3em;
`;

const TitleRightCol = styled(Col)`
  text-align: right;
  margin: auto 0;
`;

const ListWrapper = styled.div`
  margin: 30px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <HeaderContainer>
          <Container>
            <Row>
              <Col />
              <Col>
                <TitleText>Moyeora!</TitleText>
              </Col>
              <TitleRightCol>
                <Button color="primary">Register</Button>
              </TitleRightCol>
            </Row>
          </Container>
        </HeaderContainer>
        <Jumbotron>
          <h1 className="display-3">Hello, World!</h1>
          <p className="lead">
            This is toy project for learning various open-source projects,
            react, node.js, nginx, express, docker, etc... <br />
            You can see, and modify some dummy data, that is consist of fake
            auction logs.
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
        <ListWrapper>
          <h1>Popular offers</h1>
          <ListGroup>
            <ListGroupItem>OfferA</ListGroupItem>
            <ListGroupItem>OfferB</ListGroupItem>
            <ListGroupItem>OfferC</ListGroupItem>
            <ListGroupItem>OfferD</ListGroupItem>
            <ListGroupItem>OfferE</ListGroupItem>
          </ListGroup>
          <Pagination>
            <PaginationItem>
              <PaginationLink previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next />
            </PaginationItem>
          </Pagination>
          <Button color="secondary">Offer New</Button>
        </ListWrapper>
        <Jumbotron>
          <h5>author: smilu97, clarycha</h5>
        </Jumbotron>
      </div>
    );
  }
}
