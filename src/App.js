import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full h-full bg-[#000000] font-poppins max-w-[1680px] mx-auto">
       <Home>
           <Navbar />
           <div id="home">
              <Intro />
           </div>
           <div id="gallery">
              <Gallery />
           </div>
           <div id="wishes">
              <Wishes />
           </div>
           <Footer />
       </Home>
    </div>
  );
}

export default App;
