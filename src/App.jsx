// Import routing fuction from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import default layout
import DefaultLayout from "./layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import BlogPosts from "./pages/BlogPosts";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/blog_posts" element={<BlogPosts />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App