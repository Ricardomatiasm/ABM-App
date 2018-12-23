import React from 'react';
import './toggleDrawer.css';

const ToggleDrawer = props =>(
    <button className="Toggle-Button" onClick={props.click}>
        <div className="Toggle-Button-Line" />
        <div className="Toggle-Button-Line" />
        <div className="Toggle-Button-Line" />
    </button>
);

export default ToggleDrawer;