import React, { useState, useEffect } from 'react';
import { InputPresentation, InputCore } from './input.style';

const captureOnChange = inputEnteredCb => onChangeHandler => (ev)  => {
  inputEnteredCb(true);
  onChangeHandler(ev)
}

const Input = ({ error, readyToDisplayErrors, ...props}) => {
  const [pristine, updatePristine] = useState(true);
  const [touched, updateTouched] = useState(false);
  const [inputEntered, updateInputEntered] = useState(false);

  const monitoredOnChange = captureOnChange(updateInputEntered);

  useEffect(() => {
    readyToDisplayErrors(!pristine, touched, inputEntered);
  }, [props.value]);
  
  return (
    <InputPresentation 
      error={ error } 
      pristine={ pristine } 
      inputEntered={ inputEntered }
      onBlur={ () => updatePristine(false) }
      onFocus={ () => updateTouched(true) }
    >
      { props.leftChildren }
      <InputCore 
        {...props} 
        onChange={monitoredOnChange(props.onChange)}
      />
      { props.rightChildren }
    </InputPresentation>
  )
}

export default Input;
