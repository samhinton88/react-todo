import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 80px;
  height: 35px;
  color: white;
  border: none;
  border-radius: 2px;
  ${({ primary, secondary, tertiary }) => {
    if(primary) return css`background: purple;`;
    if(secondary) return css`background: grey;`;
    if(tertiary) return css`background: transparent; color: black; border: 1px solid rgba(0, 0, 0, 0.1);`;
  }}
  font-weight: bold;
  margin-top: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export default StyledButton;

