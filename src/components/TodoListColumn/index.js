import React from 'react';
import styled from 'styled-components';

const StyledTodoListColumn = styled.div`
  height: calc(100vh - 40px);
  margin-top: 10px;
  padding: 5px;
  background: white;
  width: 70vw;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    color: grey;
    font-size: 14px;
  }
`;

const TodoListColumn = ({ title, children }) => {
  return (
    <StyledTodoListColumn>
      <h2>{title}</h2>
      {children}
    </StyledTodoListColumn>
  )
}

export default TodoListColumn;
