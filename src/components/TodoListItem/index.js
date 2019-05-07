import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo, toggleFormVisible } from '../../actions';
import ToggleCompletedButton from './toggle-complete-button';
import Person from '../icons/person';
import Location from '../icons/location';
import CheckIcon from './check-icon';
import DeleteIcon from './delete-icon';
import WriteIcon from '../icons/write-icon';

const StyledTodoListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const ColorIndicator = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 8px;
`;

const StyledItemCard = styled.div`
  font-size: 12px;
  height: 80px;
  width: 80%;
  border-radius: 4px;
  opacity: 1;
  opacity: ${({ complete }) => complete && 0.5};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s;
`;

const StyledItemCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCompleteButtonGroup = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const StyledInfoGroup = styled.div`
  display: flex;
`;

const StyledItemTitle = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-weight: bold;
  padding: 3px;
  min-height: 20px;
  min-width: 150px;
`;

const StyledItemDescription = styled.div`
  color: rgba(10, 10, 10, 0.8);
`;

const StyledItemCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;


const TodoListItem = (props) => {

  const { 
    title, 
    description, 
    complete, 
    id, 
    dispatch, 
    isTop,
    people,
    location,
    color
  } = props;


  return (
    <StyledTodoListItem>
      <StyledItemCard isTop={ isTop } complete={ complete }>
      <StyledItemCardHeader>
        <StyledItemTitle complete={ complete } >
          <ColorIndicator color={ color }/>
          <h3>{title}</h3> 
        </StyledItemTitle>
        <StyledItemDescription>
        <StyledCompleteButtonGroup>
          <CheckIcon 
            onClick={() => dispatch(updateTodo(id, { ...props, complete: true}))} 
            fill={'black'}
          />
          <label>Mark as Complete:</label>

        </StyledCompleteButtonGroup>
          {description}
        </StyledItemDescription>
        <StyledInfoGroup>
          { people.map((p, i) => <>{p}<Person/></>)}
          { location && <>{location}<Location/></> }
        </StyledInfoGroup>
      </StyledItemCardHeader>
      <StyledItemCardFooter>
        <StyledInfoGroup>
          <DeleteIcon onClick={() => dispatch(deleteTodo(id))} />
          <WriteIcon onClick={() => dispatch(toggleFormVisible(props))}/>
        </StyledInfoGroup>
      </StyledItemCardFooter>
      </StyledItemCard>
    </StyledTodoListItem>
  )
}

export default connect()(TodoListItem);
