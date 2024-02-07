// import { useEffect } from 'react';
import Form from '../../Components/Form/Form';
// import { useNavigate } from 'react-router-dom';
import Map from '../../Components/Map/Map';
import { motion } from 'framer-motion';

const ContactUs = () => {

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
      <Form /> 
      <Map />
    </motion.div>
  )
}

export default ContactUs