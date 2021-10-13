import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonNodeProps = {
  bg?: string;
  color?: string;
  shape: 'radius' | 'block';
};

const ButtonNode = styled.button<ButtonNodeProps>`
  background-color: #333;
  border: solid 1px transparent;
  border-radius: 12px;
  color: #fff;
  padding: 20px;
  transition: all 0.4s ease-out;

  &:hover {
    border-color: #bbbbbb;
    box-shadow: 0 0 0 3px rgba(34, 31, 31, 0.4);
  }
`;

type ButtonPropTypes = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Button: React.FC<ButtonPropTypes & ButtonNodeProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...restButtonProps }) => (
  <ButtonNode {...restButtonProps}>{children}</ButtonNode>
);

Button.defaultProps = {
  bg: 'dodgerblue',
  color: '#fff',
};
