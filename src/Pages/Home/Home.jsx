import Cuisine from "../../Components/Cuisine/Cuisine";
import Welcome from "../../Components/Welcome/Welcome";
import CardMenuItemsCon from "../../Components/CardMenuItemsCon/CardMenuItemsCon";
import Reserve from "../../Components/Reserve/Reserve";
import Chef from "../../Components/Chef/Chef";
import Customers from "../../Components/Customers/Customers";
import Time from "../../Components/Time/Time";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Home = () => {

  const text = "Our popular menu";

  // const usenavigate = useNavigate();

  // useEffect(() => {
    
  //   let username = sessionStorage.getItem('username')

  //   if(username === '' || username === null) {
  //     usenavigate('/login')
  //   }

  // }, [])


  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}>

      <Cuisine />
      <Welcome />
      <CardMenuItemsCon text={text} />
      <Reserve />
      <Chef />
      <Customers />
      <Time />
      
    </motion.div>

  );

};


export default Home;