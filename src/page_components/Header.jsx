// Header.jsx

// Import Navlink functions from React
import { Link, NavLink } from "react-router-dom";


// RENDER
export default function Header() {
    return (
        <header>
            <h1>BLOG</h1>
            <div>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/blog_posts"}>Blog Posts</NavLink>
                <NavLink to={"/about_us"}>About Us</NavLink>
            </div>
        </header>
    );
}