import React from 'react';
import styled from 'styled-components';
import Person from '../icons/person';
import Location from '../icons/location';

const IconGroup = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.span`
  height: 10px;
  width: 10px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;


export const iconsFromProfile = ({ updatePeople, updateLocation, ...profile }) => {
  return Object.keys(profile).reduce((acc, key) => {
    const val = profile[key];
    if(key === 'people' && val.length > 0) {
      
      return [
        ...acc, 
        ...val.map((p, pi ) => (
          <IconGroup>
            {p}<Person />
            <DeleteButton
              onClick={() => updatePeople(prev => [...prev.slice(0, pi), ...prev.slice(pi+1,)])}
            >
             x
            </DeleteButton>
          </IconGroup>
        ))
      ]
    };
    if(key === 'location' && val) {
      return [
        ...acc, 
        <>
          {val.value}
          <Location />
          <DeleteButton
            onClick={() => updateLocation(null)}
          >x</DeleteButton>
        </>
        ]
    };
    if(key === 'urgency' && val) {
      return [...acc, <p>Urgency {val}</p>]
    };
    return acc;
  }, [])
}

export const parseValue = (value, existingProfile) => {
  const tokens = value.split(' ');
  const adjustments = [];

  const profile = tokens.reduce((acc, t, index, { length }) => {
    const penultimate = index === length - 2;
    if (penultimate && t.startsWith('&')) { 
      adjustments.push([index, t.length]);
      return { ...acc, people: [...acc.people, t.slice(1,)] } 
    };
    if (penultimate && t.startsWith('@')) {
      adjustments.push([index, t.length]);
      return { ...acc, location: { value: t.slice(1,), index }}}
    if (penultimate && t.includes('!')) {
      adjustments.push([index, t.length]);
      return { ...acc, urgency: (t.match(/!/g)||[]).length }
    }
    return acc;
  }, { urgency: null, people: [], location: null });

  return { profile, adjustments };
}