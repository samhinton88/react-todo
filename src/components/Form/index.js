import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CirclePicker } from 'react-color';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from '../../actions';
import Button from '../common/Button';
import Input from '../common/Input';
import { 
  iconsFromProfile, 
  parseValue 
} from './helpers';
import { emptiness, length, accrueErrors } from './validations';
import { colors } from './config';
import {
  FormContainer,
  StyledInputSection,
  StyledControlSection,
  ButtonGroup,
  ControlGroup
} from './form.style';

const handleChange = ({ 
  updatePeople, 
  updateLocation, 
  updateUrgency,
  updateTitle 
}) => ({ target: { value }}) => {
  const updateMap = { 
    people: people => updatePeople(prev => [...prev, ...people]), 
    location: location => updateLocation(location), 
    urgency: urgency => updateUrgency(urgency)
  };

  const { profile, adjustments } = parseValue(value);

  Object.keys(profile).forEach(key => updateMap[key](profile[key]));

  const newValue = adjustments.length < 1 ? value : value.split(' ').slice(0,value.split(' ').length -2).join(' ')
  updateTitle(newValue);
}

const handleSubmit = ({ error, dispatch, action, onDismiss, ...data}) => () => {
  // block submission on error
  if (error) return;
  dispatch(action(data));
  onDismiss();
};



const listenForBlockers = (updateInputShouldShowErrors) => (...predicates) => {
  updateInputShouldShowErrors(prev => [...prev, ...predicates])
}

const ColorIndicator = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const validDatePickerFormat = date => (
  typeof date === 'string' ? date : `${date.getYear()}-${date.getMonth()}-${date.getDate()}`)

const Form = ({ dispatch, onDismiss, preloadedFormData: pd = {} }) => {
  const [title, updateTitle] = useState(pd.title || '');
  const [color, updateColor] = useState(pd.color || null);
  const [location, updateLocation] = useState(pd.location || '');
  const [people, updatePeople] = useState(pd.people || []);
  const [urgency, updateUrgency] = useState(pd.urgency || 0);
  const [scheduledDate, updateScheduledDate] = useState(pd.scheduledDate || new Date());
  const [inputShouldShowErrors, updateInputShouldShowErrors] = useState([]);
  
  const titleErrors = accrueErrors([emptiness])(title);
  const error = titleErrors.errors.length > 0;

  const rightChildren = iconsFromProfile({ people, location, urgency, updatePeople, updateLocation });
  const stateHandlers = { updatePeople, updateLocation, updateUrgency, updateTitle };
  
  let submissionData = { 
    error, title, people, urgency, location: location && location.value,
    color, dispatch, onDismiss, scheduledDate 
  };
  
  const action = pd 
    ? data => updateTodo(pd.id, data)
    : data => addTodo(data)

  submissionData = { ...submissionData, action };

  return (
    <FormContainer>
      <StyledInputSection>
        <Input 
          leftChildren={color && <ColorIndicator color={ color }/>}
          rightChildren={ rightChildren }
          error={ error } 
          placeholder='add a location with @ - people with & - urgency with !' 
          value={ title } 
          onChange={ handleChange(stateHandlers)} 
          readyToDisplayErrors={ listenForBlockers(updateInputShouldShowErrors) }
        />
      </StyledInputSection>
      <StyledControlSection>
        <ControlGroup> 
          <label>Schedule: </label>
          <input 
            value={ validDatePickerFormat(scheduledDate) } 
            onChange={ (e) => updateScheduledDate(e.target.value) } 
            type='date' 
          />
          <CirclePicker 
            onChange={({ hex }) => updateColor(hex)}
            circleSize={ 20 }
            colors={ colors }
          />
        </ControlGroup>
        <ButtonGroup>
          <Button tertiary onClick={onDismiss}>Cancel</Button>
          <Button primary onClick={ handleSubmit(submissionData) }>
            {pd ? 'UPDATE':'ADD TO DO'}
          </Button>
        </ButtonGroup>
      </StyledControlSection>
      {
        inputShouldShowErrors.some((e => e)) && (
        <div>
          {[titleErrors].map(error => error.errors).map((err, i) => <p key={ i }>{err}</p>)}
        </div>
      )
        }
    </FormContainer>
  )
}

const mapStateToProps = (state) => {
  const { preloadedFormData } = state.ui;
  return {
    preloadedFormData
  }
}

export default connect(mapStateToProps)(Form);
