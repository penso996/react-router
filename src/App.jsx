// Import routing fuction from React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import default layout
import DefaultLayout from "./layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import BlogPosts from "./pages/BlogPosts";
import PostDetailPage from "./pages/PostDetailPage";
import AddPost from "./pages/AddPost";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
          {/* Posts Routing */}
          <Route path="/blog_posts">
            <Route index element={<BlogPosts />} />
            <Route path=":id" element={<PostDetailPage />} />
            <Route path="add_post" element={<AddPost />} />
          </Route>
          <Route path="/about_us" element={<AboutUs />} />
          {/* NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App