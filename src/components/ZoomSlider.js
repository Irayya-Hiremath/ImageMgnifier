import React from 'react';

const ZoomSlider = ({ value, onChange }) => {
  return (
    <div className="mt-3">
    
      <input
          type="range"
          className="mt-1 w-full"
          id="zoom-slider"
          min="20"
          max="100"
          step="5"
          value={value}
          onChange={onChange}
        />
    </div>
  );
};

export default ZoomSlider;
