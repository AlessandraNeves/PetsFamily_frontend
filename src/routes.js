import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tutors from "./pages/Tutors";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import Medicines from "./pages/Medicines";
import Vaccines from "./pages/Vaccines";

import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ Component }) => {
    const signed = useAuth();
    console.log(signed)
};

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutors" element={<PrivateRoute Component={Tutors} />} />
                <Route path="/pets" element={<PrivateRoute Component={Pets} />} />
                <Route path="/pets/:id" element={<PrivateRoute Component={PetDetails} />} />
                <Route path="/medicines" element={<PrivateRoute Component={Medicines} />} />
                <Route path="/vaccines" element={<PrivateRoute Component={Vaccines} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;