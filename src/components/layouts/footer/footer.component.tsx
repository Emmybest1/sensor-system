import React from 'react';
import styled from 'styled-components';

const FooterNode = styled.footer`
  color: #8b8989;
  font-size: 0.8rem;
  text-align: center;
  position: fixed;
  z-index: 30;
  bottom: 10px;
  left: 0;
  right: 0;
`;

export const Footer: React.FC = () => (
  <FooterNode>
    Powered by Emmanuel Onah&nbsp;<time>{new Date().getFullYear()}</time>
  </FooterNode>
);
