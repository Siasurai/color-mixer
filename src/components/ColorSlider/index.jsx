import React from 'react';
import './style.css';

const ColorSlider = ({baseColor, colorName, onValueChange}) => {
  
  const handleChange = (e) => {
    onValueChange(e.target.value)
  }

  return (
    <>
    <label htmlFor="red">{colorName}</label>
    <input
      type="range"
      className={`slider slider--${baseColor}`}
      id="redSlider"
      min="0"
      max="255"
      defaultValue="0"
      onChange={handleChange}
    />
    </>
  )
}

export default ColorSlider