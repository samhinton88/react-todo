import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDimmer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContentPanel = styled.div`

`;

const Modal = ({ children, onDismiss }) => {
  return (
    <StyledDimmer onClick={onDismiss}>
      <StyledModalContentPanel onClick={ev => ev.stopPropagation()}>
        {children}
      </StyledModalContentPanel>
    </StyledDimmer>
  )
}

export default (props) => ReactDOM.createPortal(<Modal {...props}/>, document.getElementById('modal'));