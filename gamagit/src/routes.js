import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home";

export default function FRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path='/repositories' element={<Repositories/>} />
            </Routes>
        </Router>
    );
}