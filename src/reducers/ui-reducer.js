import { 
  FORM_VISIBLE_TOGGLE
} from '../actions/types';

const defaultState = {
  formVisible: false,
  preloadedFormData: {

  }
};

export default (state=defaultState, action) => {
  switch (action.type) {
    case FORM_VISIBLE_TOGGLE: 

      return { 
        ...state, 
        formVisible: !state.formVisible, 
        preloadedFormData: action.payload 
      }
    default: return state
  }
};
