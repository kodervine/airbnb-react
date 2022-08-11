import React from "react";
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
          img= "katie-zaferes.png"
          rating= "5.0"
          reviewCount = {6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
            />
      <Contact 
          image="./images/mr-whiskerson.png" 
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
            />
      <Contact 
        image="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
            />
      <Contact 
          image="./images/felix.png"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
            />
      <Contact 
          image="./images/pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
            />
    </div> 
  );
}
