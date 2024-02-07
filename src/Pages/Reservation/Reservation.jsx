import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Reservation = () => {

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
    transition={{ delay: 0.6 }}>Reservation</motion.div>
  )
}

export default Reservation