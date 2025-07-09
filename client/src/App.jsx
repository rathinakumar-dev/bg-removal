import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Buycredit from "./pages/Buycredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {

  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredit" element={<Buycredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
