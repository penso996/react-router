// DefaultLayout.jsx

// Importa Outlet function from React
import { Outlet } from "react-router-dom";

// Import page components
import Header from "./../page_components/Header";


// RENDER
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}