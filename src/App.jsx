
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import LandingPage from "./LandingPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
