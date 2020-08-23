import React from 'react';

export default function InputField(props) {
  return (
    <div className='field'>
      <label htmlFor='carPrice'>{props.label}</label>
      <p className='sub-label'>{props.subLabel}</p>
      <input
        className='form-input'
        type={props.type}
        name={props.name}
        onBlur={props.event}
      />
      <span>{props.symbol}</span>
    </div>
  );
}
