import React, { useEffect } from "react";
import Restautant from "../../Components/Restautant/Restautant";
import AboutCenter from "../../Components/AboutCenter/AboutCenter";
import AboutBottom from "../../Components/AboutBottom/AboutBottom";
import { useNavigate } from "react-router-dom";

const About = () => {

  const usenavigate = useNavigate()

  useEffect(() => {
    
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      usenavigate('/login')
    }

  }, [])

  return (
    <div>
      <Restautant />
      <AboutCenter />
      <AboutBottom />
    </div>
  );
};

export default About;