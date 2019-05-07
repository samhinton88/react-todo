import { 
  TODO_DELETE,
  TODO_ADD,
  TODO_UPDATE
} from './types';

export const addTodo = (data) => async (dispatch) => {

  dispatch({ type: TODO_ADD, payload: { ...data, complete: false } })
}

export const updateTodo = (id, data) => async (dispatch) => {

  dispatch({ type: TODO_UPDATE, id, payload: data });
}

export const deleteTodo = id => async (dispatch) => {

  dispatch({ type: TODO_DELETE, id })
}