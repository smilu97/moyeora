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

function RegisterForm(props) {
  return (
    <Root>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input value={props.name} onChange={e => props.onChangeName(e)} />
        </FormGroup>
        <FormGroup>
          <Label>Group</Label>
          <Input value={props.group} onChange={e => props.onChangeGroup(e)} />
        </FormGroup>
      </Form>
      <Button onClick={() => props.onClickRegister()}>Register</Button>
    </Root>
  );
}

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeGroup: PropTypes.func.isRequired,
  onClickRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
