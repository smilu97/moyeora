import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Root = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px auto;
  max-width: 1000px;
`;

function PostOfferForm(props) {
  return (
    <Root>
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input
            value={props.username}
            onChange={e => props.onChangeUsername(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Item</Label>
          <Input value={props.item} onChange={e => props.onChangeItem(e)} />
        </FormGroup>
      </Form>
      <Button onClick={() => props.onClickPost()}>Post</Button>
    </Root>
  );
}

PostOfferForm.propTypes = {
  username: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onClickPost: PropTypes.func.isRequired,
};

export default PostOfferForm;
