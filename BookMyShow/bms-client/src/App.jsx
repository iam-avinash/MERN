import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
import "./Stylesheet/custom.css";
import "./Stylesheet/sizes.css";
import "./Stylesheet/theme.css";
import "./Stylesheet/form-elements.css";
import "./Stylesheet/alignments.css";

// Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
