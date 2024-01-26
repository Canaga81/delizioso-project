import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import OrderOnline from './Pages/OrderOnline/OrderOnline';
import Reservation from './Pages/Reservation/Reservation';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  return (

    <>
      
      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/aboutUs' element={<About />}/>
          <Route path='/orderOnline' element={<OrderOnline />}/>
          <Route path='/reservation' element={<Reservation />}/>
          <Route path='/contactUs' element={<ContactUs />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>

        </Routes>

        <Sidebar />

      </BrowserRouter>

    </>

  )

}

export default App;