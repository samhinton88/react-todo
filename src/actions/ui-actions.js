import { 
  FORM_VISIBLE_TOGGLE
} from './types';

export const toggleFormVisible = (data) => {
  
  return { type: FORM_VISIBLE_TOGGLE, payload: data }
};