import React from 'react';
import ('./Post.css')
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} =post

    const navigate = useNavigate();
    const handleButton = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'> 
            <h3>ID:{id}</h3>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}>SHow Details</Link>
           <Link to ={`/post/${id}`}> <button>Show More</button> </Link>
           <button onClick={handleButton}>More With Handler</button>
        </div>
    );
};

export default Post;