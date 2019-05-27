import React from 'react';
import './ModalClose.css';
import Aux from '../../../hoc/Aux';
// import Overlay from '../../Overlay/Overlay';

const modalClose = (props) =>(
    <Aux>
        {/* <Overlay show = {props.show} clicked = {props.modalClosed}/> */}
        <div className='Modal'
            style={{
                transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>    
);

export default modalClose; 