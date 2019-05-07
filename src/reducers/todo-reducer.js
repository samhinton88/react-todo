import {
  TODO_ADD,
  TODO_FETCH,
  TODO_DELETE,
  TODO_UPDATE
} from '../actions/types';
import {
  seedTodos
} from './seed-data';

const defaultState = seedTodos;

export default (state=defaultState, action) => {
  console.log('state:', state)
  switch (action.type) {
    case TODO_FETCH: return action.payload;
    case TODO_ADD: return [...state, action.payload]
    case TODO_DELETE: return (
      [...state.filter(t => t.id != action.id)]
    );
    case TODO_UPDATE: 
      const newState = state.map(t => {
        if(t.id === action.id) { 
          return action.payload;
        }
        return t;
      })
      return [...newState];
    default: return state;
  }
};
