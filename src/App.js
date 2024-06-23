import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-full bg-[#000000] font-poppins max-w-screen-2xl mx-auto">
       <Home>
           <Navbar />
           <Intro />
           <Gallery />
           <Wishes />
           <Footer />
       </Home>
    </div>
  );
}

export default App;
