// import { useEffect } from 'react';
import CardMenuItemsCon from '../../Components/CardMenuItemsCon/CardMenuItemsCon';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Menu = () => {

  const text = "Menu";

  // const usenavigate = useNavigate()

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
      <CardMenuItemsCon text={text} />
    </motion.div>
  )
}

export default Menu