import styled from 'styled-components';

const FormContainer = styled.div`
  width: 90vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 150px;
  margin-top: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;  

const StyledInputSection = styled.div`
  width: 100%;
`;

const StyledControlSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
`;

export {
  FormContainer,
  StyledInputSection,
  StyledControlSection,
  ButtonGroup,
  ControlGroup
}