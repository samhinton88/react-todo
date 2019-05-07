import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleFormVisible } from '../../actions';
import AddIcon from '../icons/add';

const StyledTopNav = styled.div`
  height: 30px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

const TopNav = ({ dispatch }) => {
  return (
    <StyledTopNav>
      <h1>ToDo</h1>
      <AddIcon onClick={() => dispatch(toggleFormVisible())}/>
    </StyledTopNav>
  )
}

export default connect()(TopNav);
