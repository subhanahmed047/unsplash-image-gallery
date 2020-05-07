import React from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

const TextField = styled(DebounceInput)`
  font-size: 18px;
  padding: 1em;
  border-radius: 10px;
  color: gray;
  font-weight: 400;
  outline: none;
  border: 1px solid lightgrey;
  margin-bottom: 1em;
`;

const Input = ({ query, onChange }) => {
  return (
    <TextField
      minLength={2}
      debounceTimeout={500}
      placeholder="Search Images"
      value={query}
      onChange={e => onChange(e)}
    />
  );
};

export default Input;
