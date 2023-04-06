import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post =useLoaderData();
    const {id, title, body} =post;

    const navigate = useNavigate();
    const handleGoBack =() =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>All Post details here:{id}</h2>
            <h3>Title:{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;