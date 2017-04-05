import styled from 'styled-components';

import * as colors from 'constants/colors.js';

export const Wrapper = styled.form`
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  border: 2px solid ${props => props.isFocused ? colors.TERTIARY : '#ccc'};
  border-radius: 2px;
	width: 100%;
	max-width: 680px;
  box-shadow: 0 0 2em 0.5em white;
`;

export const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  font: inherit;
  padding: 10px 20px;
  width: 100%;
  display: block;
  font-weight: bold;
  font-size: 32px;
`;
