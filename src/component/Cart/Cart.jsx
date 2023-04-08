import React from 'react';

const Cart = ({cart, handleRemovefromCart}) => {
    let message;
    if(cart.length === 0) {
        message = <p>Plese add some product</p>
    }else{
        message= <p>Thanks for wasting your money</p>
    }
    return (
        <div>
            <h2>cart: {cart.length}</h2>
            {message}
            {
                cart.map(single => <p>{single.name}
                <button onClick={()=>{handleRemovefromCart(single._id)}}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;