import { useEffect } from 'react';
import CardMenuItemsCon from '../../Components/CardMenuItemsCon/CardMenuItemsCon';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

  const text = "Menu";

  const usenavigate = useNavigate()

  useEffect(() => {
    
    let username = sessionStorage.getItem('username')

    if(username === '' || username === null) {
      usenavigate('/login')
    }

  }, [])

  return (
    <>
      <CardMenuItemsCon text={text} />
    </>
  )
}

export default Menu