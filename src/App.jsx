import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {Route , Routes } from 'react-router-dom'
import { Home, Onboarding } from "./pages";

const App = () => {

    return (
        <div className="relative flex min-h-screen p-4 flex-row bg-[#13131a]">
            <div className="relative mr-10 hidden sm:flex">
        {<Sidebar /> }
            </div>

            <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        {<Navbar /> }

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>

        </div>
    );
};

export default App;