import styled from 'styled-components';
// import { stripUnit } from 'polished';

import { COLOR_TERTIARY } from 'style.js';

export const Wrapper = styled.form`
  margin: 0;
  padding: 0;
  border: 1px solid ${COLOR_TERTIARY};
  border-radius: 2px;
	width: 100%;
	max-width: 600px;
`;

export const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  font: inherit;
  font-size: 26px;
  padding: 10px 20px;
  width: 100%;
  display: block;
`;
