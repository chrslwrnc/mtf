import styled from 'styled-components';

import * as colors from 'constants/colors.js';

export const Wrapper = styled.div`
  margin: 20vh auto;
	max-width: 680px;
`;

export const Body = styled.div`
	line-height: 1.6;
	font-size: 20px;

	hr {
		height: 1px;
		margin: 0;
		padding: 0;
		background-color: black;
		border: 0;
	}

	img {
		display: block;
		max-width: 100%;
	}

	a {
		color: ${colors.TERTIARY};
		text-decoration: none;
		border-bottom: 1px solid currentColor;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 2em 0;
	}

	pre {
		background-color: rgba(0,0,0,.05);
		padding: 20px;
		font-family: Menlo,Monaco,"Courier New",Courier,monospace;
		font-size: 16px;
		margin: 2em 0;
	}

	p {
		margin: 2em 0;
	}
`;
