import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../Button/Button';

const Modal = (props) => {
    
    return (
      <Aux>
            <form style={{margin:'auto'}}>
              <input style={{display:'block', width:'400px'}} type="text" placeholder="name"/>
              <input style={{display:'block', width:'400px'}} type="text" placeholder="description"/>
              <input style={{display:'block', width:'400px'}} type="text" placeholder="price"/>
              <input style={{display:'block', width:'400px'}} type="text" placeholder="quantity"/>
              <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
              <Button btnType='Success'clicked={props.purchaseContinued}>ADD</Button>
            </form>    
        </Aux>
    );
};

export default Modal;