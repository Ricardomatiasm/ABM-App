import React from 'react';
import './backDrop.css'

const BackDrop = props =>(
    <div className="Backdrop" onClick={props.click}></div>
)

export default BackDrop;