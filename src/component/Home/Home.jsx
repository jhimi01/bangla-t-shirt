import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const alltShirt = useLoaderData()
    console.log(alltShirt)
    return (
        <div>
           <h2> In stock {alltShirt.length} items</h2>
        </div>
    );
};

export default Home;