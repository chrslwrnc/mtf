import styled from 'styled-components';
// import { stripUnit } from 'polished';

import { COLOR_TERTIARY } from 'style.js';

export const Wrapper = styled.form`
  margin: 0;
  padding: 0;
  border: 1px solid ${COLOR_TERTIARY};
`;

export const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  font: inherit;
`;
