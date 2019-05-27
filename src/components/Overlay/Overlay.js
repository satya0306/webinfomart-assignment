import React from 'react';
import './Overlay.css';

const overLay = (props) =>(
    props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
);

export default overLay;