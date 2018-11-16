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

function RequestForm(props) {
  return (
    <Root>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input value={props.name} onChange={e => props.onChangeName(e)} />
        </FormGroup>
        <FormGroup>
          <Label>Cost</Label>
          <Input
            type="number"
            value={props.cost}
            onChange={e => props.onChangeCost(e)}
          />
        </FormGroup>
      </Form>
      <Button onClick={() => props.onClickRequest()}>Register</Button>
    </Root>
  );
}

RequestForm.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.number,
  onChangeName: PropTypes.func,
  onChangeCost: PropTypes.func,
  onClickRequest: PropTypes.func,
};

export default RequestForm;
