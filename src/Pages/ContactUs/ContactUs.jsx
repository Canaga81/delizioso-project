import { useEffect } from 'react';
import Form from '../../Components/Form/Form';
import { useNavigate } from 'react-router-dom';
import Map from '../../Components/Map/Map';

const ContactUs = () => {

  const usenavigate = useNavigate()

  useEffect(() => {
    
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      usenavigate('/login')
    }

  }, [])

  return (
    <>
      <Form /> 
      <Map />
    </>
  )
}

export default ContactUs