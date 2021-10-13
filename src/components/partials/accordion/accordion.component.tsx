import React from 'react';
import styled from 'styled-components';

import { useAccordion } from './accordion.hook';

/** ******
 * <Accordion.Header/>
 */
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.h3`
  font-size: 0.9rem;
  font-weight: 300;
`;

const DropdownIconWrapper = styled.div`
  background-color: #676a71;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  transition: all 0.5s ease-out;

  &.accordion--closed {
    transform: rotate(180deg);
  }
`;

type HeaderPropTypes = {
  isOpened?: boolean;
  title: string;
  toggleIsOpened?: React.MouseEventHandler;
};

const Header: React.FC<HeaderPropTypes> = ({ title, isOpened, toggleIsOpened }) => (
  <HeaderWrapper>
    <TitleWrapper>
      <span className="panel-hash">#</span>&nbsp;{title}
    </TitleWrapper>
    <DropdownIconWrapper role="button" className={`accordion ${isOpened ? 'accordion--opened' : 'accordion--closed'}`} onClick={toggleIsOpened}>
      <i className="fa fa-angle-up" aria-hidden="true" />
    </DropdownIconWrapper>
  </HeaderWrapper>
);

const BodyWrapper = styled.div`
  padding-left: 15px;
  font-size: 0.8rem;

  & > * {
    color: #949494;

    &:hover {
      color: #eee;
    }
  }
`;

/** ******
 * <Accordion.Body/>
 */
type BodyPropTypes = {
  isOpened?: boolean;
  children: React.ReactNode;
};

const Body: React.FC<BodyPropTypes> = ({ children, isOpened }) =>
  isOpened ? (
    <BodyWrapper>
      <span className="panel-hash">#</span>&nbsp;{children}
    </BodyWrapper>
  ) : null;

/** ******
 * <Accordion/>
 */
const AccordionWrapper = styled.div``;

type AccordionPropTypes = {
  Header: React.FC<HeaderPropTypes>;
  Body: React.FC<BodyPropTypes>;
};

export const Accordion: React.FC & AccordionPropTypes = ({ children }) => {
  const { isOpened, toggleIsOpened } = useAccordion();

  const newNode = React.Children.map(children, (child) => {
    const item = child as React.ReactElement<React.PropsWithChildren<HeaderPropTypes & BodyPropTypes>>;

    if (item.type === Header) return React.cloneElement(item, { toggleIsOpened, isOpened });

    if (item.type === Body) return React.cloneElement(item, { isOpened });

    return child;
  });

  return <AccordionWrapper>{newNode}</AccordionWrapper>;
};

Accordion.Header = Header;
Accordion.Body = Body;
