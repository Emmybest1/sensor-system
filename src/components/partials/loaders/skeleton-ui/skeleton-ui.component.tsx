import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonUiDimmer = keyframes`
 from {
      background-color: #e2e2e2;
    }
  
    50% {
      background-color: #f3f3f3;
    }
  
    to {
      background-color: #e2e2e2;
    }
 `;

type SkeletonUiPropTypes = {
  shape: 'radiusHorizone' | 'radiusVerticone' | 'blockHorizone' | 'blockVerticone';
  width?: string;
  height?: string;
};

const SkeletonUiNode = styled.div<SkeletonUiPropTypes>`
  animation: ${skeletonUiDimmer} 1.5s infinite;
  margin-bottom: 0.625rem;
  border-radius: ${({ shape }) => (['radiusHorizone', 'radiusVerticone'].includes(shape) ? '0.1875rem' : '0')};
  width: ${({ shape, width }) => width || (['radiusVerticone', 'blockVerticone'].includes(shape) ? '1.25rem' : '100%')};
  height: ${({ shape, height }) => height || (['radiusHorizone', 'blockHorizone'].includes(shape) ? '1.25rem' : '100%')};
`;

export const SkeletonUi: React.FC<SkeletonUiPropTypes> = (props) => <SkeletonUiNode {...props} />;
