import React from 'react';
import styled from 'styled-components';
import { ReactPortal } from '../react-portal/react-portal.component';

const NotificationWrapper = styled.div`
  box-shadow: 0px 2px 36px 22px rgba(0, 0, 0, 0.1);
  color: #fff;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px 20px;
  min-height: 50px;

  &.modal--success {
    background-image: linear-gradient(to right top, #333, #1b1c2b, #2b4747);
  }

  &.modal--danger {
    background-image: linear-gradient(to right top, #333, #1b1c2b, #4a3143);
  }
`;

const Row1 = styled.div``;

const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
`;

const HeadingNode = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  padding: 0;
`;

const MessageNode = styled.p`
  color: #cccbcb;
  font-size: 0.85rem;
  padding: 0;
`;

const CloseButton = styled.div`
  background-color: #ff0000;
  height: 15px;
  width: 15px;
  border-radius: 50%;

  &:hover {
    opacity: 0.7;
  }
`;

type NotificationPropTypes = {
  shownModal: boolean;
  type: 'success' | 'danger';
  heading: string;
  message: string;
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
  onCloseHandler: React.MouseEventHandler<HTMLDivElement>;
};

export const Notification: React.FC<NotificationPropTypes> = ({ shownModal, type, heading, message, onCloseHandler, position }) => (
  <>
    {shownModal && (
      <ReactPortal label={heading} position={position}>
        <NotificationWrapper className={`${type === 'success' ? 'modal--success' : 'modal--danger'}`}>
          <Row1>
            <CloseButton role="button" tabIndex={0} onClick={onCloseHandler} />
          </Row1>

          <Row2>
            <HeadingNode>{heading}&nbsp;</HeadingNode>
            <MessageNode>{message}</MessageNode>
          </Row2>
        </NotificationWrapper>
      </ReactPortal>
    )}
  </>
);
