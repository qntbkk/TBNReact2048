import styled, { css } from 'styled-components';
import { Color } from '../../themes/types';

export interface StyledKnobProps {
  active: boolean;
  knobColor: Color;
  activeColor: Color;
  inactiveColor: Color;
}

const getKnobBackground = ({
  active,
  activeColor,
  inactiveColor,
}: StyledKnobProps) => css`
  background-color: ${({ theme: { palette } }) =>
    palette[active ? activeColor : inactiveColor]};
`;

const StyledKnob = styled.span<StyledKnobProps>`
  position: relative !important;
  box-sizing: border-box !important;
  display: block !important;
  width: 40px !important;
  height: 20px !important;
  cursor: pointer !important;
  transition: background-color 0.2s ease-in !important;
  ${getKnobBackground} !important;

  ::after {
    content: '' !important;
    position: absolute !important;
    top: 2px !important;
    left: 2px !important;
    border-radius: 100% !important;
    width: 16px !important;
    height: 16px !important;
    transition: all 0.2s ease-in !important;
    background-color: ${({ theme: { palette }, knobColor }) =>
    palette[knobColor]} !important;
    transform: ${({ active }) => active && 'translateX(20px)'} !important;
  }
`;

export default StyledKnob;
