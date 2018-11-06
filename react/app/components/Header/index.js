/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';

import { REGISTER_PAGE_URL } from 'containers/App/constants';

const TitleText = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3em;
`;

const TitleRightCol = styled(Col)`
  text-align: right;
  margin: auto 0;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 0;
`;

function Header(props) {
  return (
    <HeaderContainer>
      <Container>
        <Row>
          <Col />
          <Col>
            <TitleText>Moyeora!</TitleText>
          </Col>
          <TitleRightCol>
            <Button onClick={() => props.onClickRegister()} color="primary">
              Register
            </Button>
          </TitleRightCol>
        </Row>
      </Container>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onClickRegister: PropTypes.func,
};
Header.defaultProps = {
  onClickRegister: () => {
    history.push(REGISTER_PAGE_URL);
  },
};

export default Header;
