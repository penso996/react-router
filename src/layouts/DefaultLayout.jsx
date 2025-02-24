import { Outlet } from "react-router-dom";

// Import components
import Header from "./../page_components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}