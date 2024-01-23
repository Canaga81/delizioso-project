import React from "react";
import Cuisine from "../../Components/Cuisine/Cuisine";
import Welcome from "../../Components/Welcome/Welcome";
import CardMenuItemsCon from "../../Components/CardMenuItemsCon/CardMenuItemsCon";

const Home = () => {
  return (
    <>

      <Cuisine />
      <Welcome />
      <CardMenuItemsCon />
      
    </>
  );
};

export default Home;