import React from "react";
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Card from "./components/Card"
import data from "./data"

const cardData = data.map((el) => {
    return <Card 
        img={el.coverImg}
        rating={el.stats.rating}
        reviewCount={el.stats.reviewCount}
        location={el.location}
        title={el.title}
        price={el.price}
    />
})

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {cardData}
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
