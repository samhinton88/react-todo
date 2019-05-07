import styled from 'styled-components';

const StyledToggleCompleteButton = styled.button`
  width: 150px;
  height: 20px;
  border-radius: 3px;
  color: white;
  background: ${({ complete }) => complete ? 'transparent': 'rgba(0, 0, 255, 0.8)'};
`;

export default StyledToggleCompleteButton;
