import React from 'react';

export default function LeasingLength(props) {
  return (
    <div className='leasing-length'>
      <label className='radio-label'>
        <input
          type='radio'
          name={props.name}
          value={props.value}
          className='radio-button'
          onChange={props.event}
          defaultChecked={props.checked}
        />
        {props.value} måneder
      </label>
    </div>
  );
}
