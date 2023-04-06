import React from 'react';
import ('./Friend.css')
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name, email, phone, id} = friend;
    return (
        <div className='friend'> 
            <h1>{name}</h1>
            <h2>Email:{email}</h2>
            <h3>Phone:{phone}</h3>
            <p><Link className='btn' to ={`/friend/${id}`}>Show More Details</Link></p>
        </div>
    );
};

export default Friend;