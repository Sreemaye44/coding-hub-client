import React from 'react';
import './Toggle.css';

const Toggle = ({toggle,handleToggleChange}) => {
    return (
        <div className='toggle-container' onClick={handleToggleChange}>
        <div className={`toggle-button ${!toggle? "disable" : ""}`}>{toggle? "light": "dark"}</div>
            
        </div>
    );
};

export default Toggle;