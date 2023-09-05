import React, { useState } from 'react';

const SwitchComponent = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  return (
    <div className="switch-component">
      <div className="container">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className={`switch ${isChecked ? 'checked' : ''}`} htmlFor="checkbox">
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default SwitchComponent;
