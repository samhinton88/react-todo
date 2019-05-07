import styled, { css } from 'styled-components';

const InputPresentation = styled.div`
  height: 40px;
  width: 100%;
  background: white;
  align-items: center;
  box-sizing: border-box;
  cursor: text;
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  ${({ error, pristine, inputEntered }) => {
    if(pristine) return;

    if(inputEntered && error) {
      return css`
        border: 2px solid rgba(200, 20, 20, 0.6);
      `;
    }
  }}
`;

const InputCore = styled.input`
  background: transparent;
  background: transparent;
  border: none;
  color: grey;
  flex-grow: 1;
  font-size: 14px;
  outline: none;
  width: 30px;
`;

const StyledLabel = styled.label`

`;

export {
  InputPresentation,
  InputCore,
  StyledLabel
}
