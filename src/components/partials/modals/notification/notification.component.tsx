import React from 'react';
import styled from 'styled-components';
import { ReactPortal } from '../react-portal/react-portal.component';

const NotificationWrapper = styled.div``;

const Row1 = styled.div``;

const Row2 = styled.div``;

const HeadingNode = styled.h2``;

const MessageNode = styled.p``;

const CloseButton = styled.div``;

type NotificationPropTypes = {
  shownModal: boolean;
  type: 'success' | 'danger';
  heading: string;
  message: string;
  onCloseHandler: React.MouseEventHandler<HTMLDivElement>;
};

export const Notification: React.FC<NotificationPropTypes> = ({ shownModal, type, heading, message, onCloseHandler }) => (
  <>
    {shownModal && (
      <ReactPortal label={heading}>
        <NotificationWrapper className={`${type === 'success' ? 'modal--success' : 'modal--danger'}`}>
          <Row1>
            <CloseButton role="button" tabIndex={0} onClick={onCloseHandler} />
          </Row1>

          <Row2>
            <HeadingNode>{heading}</HeadingNode>
            <MessageNode>{message}</MessageNode>
          </Row2>
        </NotificationWrapper>
      </ReactPortal>
    )}
  </>
);
