import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Games from "../pages/Games";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
        </Routes>
    );
}

export default AppRoutes;