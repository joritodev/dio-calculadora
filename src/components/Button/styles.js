import styled, { css } from 'styled-components';

const variantStyles = {
  operator: css`
    background: #ff8c00;
    color: #fff;
  `,
  utility: css`
    background: #6c757d;
    color: #fff;
  `,
  equals: css`
    background: #0d6efd;
    color: #fff;
  `,
  default: css`
    background: #2d2d2d;
    color: #fff;
  `
}

export const ButtonContainer = styled.button`
  padding: 16px;
  border: none;
  background: #2d2d2d;
  color: #ffffff;
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  margin: 6px;
  cursor: pointer;
  transition: transform .05s ease, opacity .2s ease;

  ${props => variantStyles[props.$variant] || variantStyles.default}

  &:hover {
    opacity: .9;
  }

  &:active {
    transform: scale(0.98);
  }
`