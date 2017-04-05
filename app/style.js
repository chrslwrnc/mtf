import { injectGlobal } from 'styled-components';

export const COLOR_TERTIARY = '#607d8b';

injectGlobal`
  body {
  	background-color: white;
	  color: black;
	  font-family: 'Muli', 'Open Sans', Arial;
	  font-size: 100%;
	  margin: 0;
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

