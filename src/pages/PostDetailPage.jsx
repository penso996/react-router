// PostDetailPage.jsx

// Import useState from React
import { useState, useEffect } from 'react';
// Import useParams for routing
import { useParams } from "react-router-dom";
// Import axios
import axios from 'axios';

export default function PostDetailPage() {

    // get the post ID from the URL params
    const { id } = useParams();
    // useState to set current post from param
    const [post, setPost] = useState({});

    // FUNCTION to fetch an ID post
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => fetchPost(), [id])


    // RENDER
    return (
        <main>
            {/* Blog Post*/}
            <div className="post-container">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <img src={post.image} alt={post.title} />
                <p>{post.tags?.length === 1 ? post.tags[0] : post.tags?.join(", ")}</p>
            </div>
        </main>
    );
}