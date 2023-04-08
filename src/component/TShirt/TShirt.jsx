import React from 'react';
import './TShirt.css'


const TShirt = ({item, handleAddtoCart}) => {

    const {name, price, picture, gender, _id} = item
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>gender: {gender?gender:'not found'}</p>
            <h5>Price: ${price}</h5>
            <button onClick={()=>{handleAddtoCart(item, _id)}} className='btn'>Buy now</button>
        </div>
    );
};

export default TShirt;