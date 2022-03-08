import React from 'react';

export default function Die(props) {
  return (
    <div
      className={`die-face ${props.isHeld && 'is-held'}`}
      onClick={props.heldDice}
    >
      <h2 className='die-num'>{props.value}</h2>
    </div>
  );
}
