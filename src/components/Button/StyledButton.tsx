import styled, { css } from 'styled-components';

export interface StyledButtonProps {
  disable?: boolean;
  mini?: boolean;
}

const getMiniProps = () => css`
  width: 24px !important;
  height: 24px !important;
  font-size: 12px !important;
  line-height: 24px !important;
  padding: 0 !important;
`;

const StyledButton = styled.button<StyledButtonProps>`
  outline: none !important;
  border: none !important;
  padding: 8px 16px !important;
  line-height: 1.75 !important;
  margin: 0 !important;
  white-space: nowrap !important;
  ${({ mini }) => mini && getMiniProps} !important;
  border-radius: ${({ theme }) => theme.borderRadius} !important;
  background: ${({ theme: { palette } }) => palette.primary} !important;
  color: ${({ theme: { palette } }) => palette.foreground} !important;
  opacity: ${({ disable }) => disable && 0.7} !important;
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')} !important;
`;

export default StyledButton;
