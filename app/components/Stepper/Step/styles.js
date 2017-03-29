import styled from 'styled-components';

import * as vars from '../vars.js';

export const Step = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	z-index: 3;
	cursor: pointer;
	color: ${props => props.selected ? vars.COLOR_ACTIVE : ''};
	transition: color 0.1s ease;

	&:hover {
		color: ${vars.COLOR_ACTIVE};
	}

	&:after {
		content: '';
		width: ${vars.STEP_SIZE};
		height: ${vars.STEP_SIZE};
		border: ${vars.LINE_WIDTH} solid currentColor;
		background-color: white;
		border-radius: 50%;
		display: block;
		box-sizing: border-box;
	}
`;

export const Label = styled.span`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	font-weight: bold;
`;
