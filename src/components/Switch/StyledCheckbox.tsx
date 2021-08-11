import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  margin: 0 !important;
`;

export default StyledCheckbox;
