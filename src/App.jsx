import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import default layout
import DefaultLayout from "./layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App