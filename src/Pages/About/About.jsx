import { useEffect } from "react";
import Restautant from "../../Components/Restautant/Restautant";
import AboutCenter from "../../Components/AboutCenter/AboutCenter";
import AboutBottom from "../../Components/AboutBottom/AboutBottom";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const About = () => {

  const usenavigate = useNavigate()

  useEffect(() => {
    
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      usenavigate('/login')
    }

  }, [])

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}>
      <Restautant />
      <AboutCenter />
      <AboutBottom />
    </motion.div>
  );
};

export default About;