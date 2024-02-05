import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {

  const usenavigate = useNavigate()

  useEffect(() => {
    
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      usenavigate('/login')
    }

  }, [])

  return (
    <div>Reservation</div>
  )
}

export default Reservation