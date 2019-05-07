import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TodoListItem from '../TodoListItem';

const StyledList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  
`;

const TodoList = ({ items, dispatch }) => {

  return (
    <StyledList>
      {items && items.map((todoProps, i) => (
        <TodoListItem 
          key={ i }
          isTop={i === items.length -1}
          id={ todoProps.id }
          { ...todoProps }
        />
      )
      )}
    </StyledList>
  )
}



export default connect()(TodoList);
