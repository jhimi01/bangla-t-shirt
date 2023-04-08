import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className=''>
            <h2>Father</h2>
           <div className="flex">
           <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
           </div>
        </div>
    );
};

export default Father;