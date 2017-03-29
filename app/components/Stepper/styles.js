import styled from 'styled-components';
import { stripUnit } from 'polished';

import * as vars from './vars.js';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: ${vars.HEIGHT};
  color: ${vars.COLOR_INACTIVE};

  &:before {
    content: '';
    position: absolute;
    bottom: ${(stripUnit(vars.STEP_SIZE) / 2) - (stripUnit(vars.LINE_WIDTH) / 2)}px;
    height: ${vars.LINE_WIDTH};
    background-color: currentColor;
    left: 0;
    z-index: 1;
    right: 0;
  }
`;

export const Bar = styled.div`
  width: ${props => props.width}%;
  position: absolute;
  bottom: ${(stripUnit(vars.STEP_SIZE) / 2) - (stripUnit(vars.LINE_WIDTH) / 2)}px;
  height: ${vars.LINE_WIDTH};
  background-color: ${vars.COLOR_ACTIVE};
  left: 0;
  z-index: 2;
  transition: width 0.1s ease;
`;
