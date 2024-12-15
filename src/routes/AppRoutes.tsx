import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Play from "../pages/Play";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/play" element={<Play />} />
        </Routes>
    );
}

export default AppRoutes;