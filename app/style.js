import { injectGlobal } from 'styled-components';

import * as colors from 'constants/colors.js';

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
			background-color: ${colors.TERTIARY}
		}
	}
`;

