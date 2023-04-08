import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const alltShirt = useLoaderData()
    const [cart ,setCart] = useState([])


    const handleAddtoCart = (alltShirt, _id) =>{
        // const newcart = [...cart, alltShirt]
        const addcart = cart.find(t => t._id === _id)
        if(addcart){
            toast.success('Already exists.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
        }else{
            console.log('add to cart')
            const newcart = [...cart, alltShirt]
            setCart(newcart)
            console.log(newcart)
        }
    }

    const handleRemovefromCart = _id =>{
        console.log(_id)
        const deleted = cart.filter(t => t._id !== _id)
        setCart(deleted)
    };

    return (
        <div className='home-container'>
           <div className='t-shirt-container'>
           {
            alltShirt.map((item) => <TShirt item={item} handleAddtoCart={handleAddtoCart} key={item._id}></TShirt>)
           }
           </div>
           <div className="cart">
            <Cart cart={cart} handleRemovefromCart={handleRemovefromCart}></Cart>
           </div>
        </div>
    );
};

export default Home;