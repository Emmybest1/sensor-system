import React, { useEffect } from 'react';
import ReadDOM from 'react-dom';

type ReactPortalPropTypes = {
  children: React.ReactNode;
  label: string;
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
};

const rootModalRef = document.getElementById('rootModal');

export const ReactPortal: React.FC<ReactPortalPropTypes> = ({ children, position, label }) => {
  const modalContainerNode: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    if (rootModalRef) {
      modalContainerNode.setAttribute('class', `modal-container modal-container--position-${position}`);
      modalContainerNode.setAttribute('role', 'dialog');
      modalContainerNode.setAttribute('aria-modal', 'true');
      modalContainerNode.setAttribute('aria-label', `${label} modal`);
      modalContainerNode.setAttribute('aria-atomic', 'true');
      modalContainerNode.setAttribute('aria-live', 'assertive');

      rootModalRef.appendChild(modalContainerNode);
    }

    return () => {
      rootModalRef!.removeChild(modalContainerNode);
    };
  }, []);

  return ReadDOM.createPortal(children, modalContainerNode);
};

ReactPortal.defaultProps = {
  position: 'top-center',
};
