import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
  Pagination,
  PaginationLink,
  PaginationItem,
} from 'reactstrap';

const ListWrapper = styled.div`
  margin: 30px;
`;

function ListSection(props) {
  const { offers, currentPage, offerNum, paginationSize } = props;
  const pageSize = offers.length;

  const paginationMax =
    offerNum === 0 ? 1 : Math.floor((offerNum - 1) / pageSize) + 1;
  const paginationBegin =
    Math.floor((currentPage - 1) / paginationSize) * paginationSize + 1;
  const paginationEnd = Math.min(
    paginationBegin + paginationSize,
    paginationMax + 1,
  );

  return (
    <ListWrapper>
      <h1>Popular offers</h1>
      <ListGroup>
        {offers.map(offer => (
          <ListGroupItem
            action
            onClick={() => props.onClickOffer(offer)}
            key={offer.key}
          >
            {offer.name} <Badge>{offer.reqNum}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Pagination>
        <PaginationItem disabled={paginationBegin === 1}>
          <PaginationLink
            onClick={() => props.onClickPagination(paginationBegin - 1)}
            previous
          />
        </PaginationItem>
        {_.range(paginationBegin, paginationEnd).map(val => (
          <PaginationItem key={val} active={val === currentPage}>
            <PaginationLink onClick={() => props.onClickPagination(val)}>
              {val}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={paginationEnd === paginationMax + 1}>
          <PaginationLink
            onClick={() => props.onClickPagination(paginationEnd)}
            next
          />
        </PaginationItem>
      </Pagination>
      <Button color="secondary">Offer New</Button>
    </ListWrapper>
  );
}

ListSection.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  offerNum: PropTypes.number,
  paginationSize: PropTypes.number,
  onClickOffer: PropTypes.func,
  onClickPagination: PropTypes.func,
};
ListSection.defaultProps = {
  offerNum: 0,
  paginationSize: 2,
  onClickOffer: () => null,
  onClickPagination: () => null,
};

export default ListSection;
