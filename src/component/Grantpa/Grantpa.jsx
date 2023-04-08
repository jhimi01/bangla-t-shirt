import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grantpa.css'

const Grantpa = () => {
    return (
        <div className='grantpa-container'>
        <h2>Grantpa</h2>
         <div className='grantpa'>
         <Father></Father>
           <Uncle></Uncle>
           <Aunty></Aunty>
         </div>
        </div>
    );
};

export default Grantpa;