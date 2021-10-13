/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';

import { useAccordion } from './accordion.hook';

const HeaderWrapper = styled.div``;

const BodyWrapper = styled.div``;

const AccordionWrapper = styled.div``;

type AccordionPropTypes = {
  Header: React.FC;
  Body: React.FC<BodyPropTypes>;
};

type BodyPropTypes = {
  children: React.ReactNode;
};

const Header: React.FC = () => {
  const { isOpened, toggleIsOpened } = useAccordion();

  console.log(isOpened, toggleIsOpened);

  return <HeaderWrapper>Accordion Header</HeaderWrapper>;
};

const Body: React.FC<BodyPropTypes> = ({ children }) => <BodyWrapper>{children}</BodyWrapper>;

export const Accordion: React.FC & AccordionPropTypes = ({ children }) => <AccordionWrapper>{children}</AccordionWrapper>;

Accordion.Header = Header;
Accordion.Body = Body;
