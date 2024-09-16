import React from "react";
import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";
import sanityClient from './sanityClient';

function App() {
   const [images, setImages] = useState([]);
   const [others, setOthers] = useState([]);
   const [wishes, setWishes] = useState([]);


   // GALLERY CONTENTS
   useEffect(() => {
     sanityClient.fetch(`*[_type == "gallery"]{
   celebrantsImages
   }`).then((data) => {
      data.map((item) => setImages(item.celebrantsImages))
   });

   // console.log(images, 'NOW')
    
   }, []);



   // OTHER CONTENTS
   useEffect(() => {
     sanityClient.fetch(`*[_type == 'others']{
              ...,
              content[]->{
                  ...,
              }
            }`).then((data) => data.map((item) => setOthers(item)) );

   // console.log(others)
    
   }, []);


    // WISHES CONTENTS
   useEffect(() => {
     sanityClient.fetch(`*[_type == 'wishes'] {
              ...,
              content[]->{
                  ...,
              }
            }`).then((data) => setWishes(data) );

      // console.log(wishes)
    
   }, []);


  return (
    <div className="relative w-full h-full bg-[#000000] font-poppins max-w-[1680px] mx-auto">
       <Home data={others} >
           <Navbar />
           <div id="home">
              <Intro data={others} />
           </div>
           <div id="gallery">
              <Gallery data={images} />
           </div>
           <div id="wishes">
              <Wishes data={wishes} />
           </div>
           <Footer data={others} />
       </Home>
    </div>
  );
}

export default App;
