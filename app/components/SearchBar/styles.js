import styled from 'styled-components';
// import { stripUnit } from 'polished';

import { COLOR_TERTIARY } from 'style.js';

export const Wrapper = styled.form`
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  border: 2px solid ${props => props.isFocused ? COLOR_TERTIARY : '#ccc'};
  border-radius: 2px;
	width: 100%;
	max-width: 680px;
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
