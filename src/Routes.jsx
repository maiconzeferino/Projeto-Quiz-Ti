import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/authentication" element={<Authentication />} />
            </Routes>
        </Router>
    );
}
