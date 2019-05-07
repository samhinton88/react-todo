import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleFormVisible } from '../../actions';
import ButtonToggle from '../../components/ButtonToggle';
import TodoListColumn from '../../components/TodoListColumn';
import TodoList from '../../components/TodoList';
import Form from '../../components/Form';
import Modal from '../../components/Modal';


const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledColumnContainer = styled.div`
  display: flex;
`;

const dayFrom = (date) => date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

const displayDay = (date) => {
  if(dayFrom(date) === dayFrom(new Date())) return 'Today';
}

const filters = {
  all: () => true,
  critical: ({ urgency }) => urgency > 3,
  complete: ({ complete }) => complete,
  incomplete: ({ complete }) => !complete
};

const sortFunctions = {

}


const Dashboard = ({ dispatch, todos, formVisible }) => {
  const [displayedDay, updateDisplayedDay] = useState(displayDay(new Date));
  const [filter, updateFilter] = useState('all');

  return (
    <StyledDashboard>
      <StyledColumnContainer>
        <ButtonToggle states={ Object.keys(filters)} onSelect={ filter => updateFilter(filter)}/>
        <TodoListColumn title={ 'To Do' }>
          <TodoList 
            status={ 'todo' } 
            items={todos && todos.filter(filters[filter])}
          />
        </TodoListColumn>
      </StyledColumnContainer>
      { 
        formVisible && (
          <Modal onDismiss={() => dispatch(toggleFormVisible())}>
            <Form 
              onDismiss={() => dispatch(toggleFormVisible())}
            />
          </Modal>
        )
      }
    </StyledDashboard>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    formVisible: state.ui.formVisible
  }
}

export default connect(mapStateToProps)(Dashboard);
