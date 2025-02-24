// BlogPosts.jsx

// Import useState from React
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

export default function BlogPosts() {

    // useState to handle blogPosts
    const [blogPostsData, setBlogPostsData] = useState([]);

    // FUNCTION with axios to handle API request
    function fetchBlogPost() {
        axios.get("http://localhost:3000/posts")
            .then((res) => setBlogPostsData(res.data))
            .catch((err) => console.error("Error fetching posts", err));
    }
    // useEffect to fetch data once
    useEffect(fetchBlogPost, []);


    // RENDER
    return (
        <main>
            {/* Blog Posts List*/}
            {blogPostsData.length === 0 ? (<div><h3>No posts to show</h3></div>) : (
                blogPostsData.map((post) => (
                    <div className="post-container" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags.length === 1 ? post.tags[0] : post.tags.join(", ")}</p>
                    </div>
                ))
            )}
        </main>
    );
}