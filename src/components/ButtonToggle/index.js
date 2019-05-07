import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonToggle = ({ states, onSelect }) => {
  const [active, updateActive] = useState('all');

  return (
    <ToggleGroup>
      { states.map((s, i) => {
        if (s === active) return <Button tertiary key={ i }>{s}</Button>

        return (
          <Button secondary onClick={() => {updateActive(s);onSelect(s)}} key={ i }>{s}</Button>
        )
      })}
    </ToggleGroup>
  )
}

export default ButtonToggle;
