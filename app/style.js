import { injectGlobal } from 'styled-components';

export const COLOR_TERTIARY = '#80cbc4';

injectGlobal`
  body {
  	background-color: white;
	  color: black;
	  font-family: Arial;
	  font-size: 100%;
	  margin: 10%;
	  font-smoothing: antialiased;
	}

	* {
		box-sizing: border-box;

		&::selection {
			color: white;
			background-color: ${COLOR_TERTIARY}
		}
	}
`;

