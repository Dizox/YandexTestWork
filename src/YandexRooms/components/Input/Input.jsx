import React, { useState } from 'react';
import './Input.css';

export function Input(props) {
  const {title, type = 'text', placeholder, value, onChange, onFocus, onBlur} = props;
  
  return (
    <div className="input">
      <div className="input__title">{title}</div>
      <input
        type={type}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  )
}