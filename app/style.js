import { injectGlobal } from 'styled-components';
// import { stripUnit } from 'polished';

injectGlobal`
  body {
  	background-color: white;
	  color: black;
	  font-family: Arial;
	  font-size: 100%;
	  margin: 10%;
	  font-smoothing: antialiased;
	}
`;

export const COLOR_TERTIARY = 'red';
