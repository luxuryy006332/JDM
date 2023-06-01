import './App.scss';
import logo from './img/logo.png'

import FooterItems from './components/FooterItems';
import Home from './components/Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import JdmCars from './components/JdmCars/JdmCars';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={ <Navigate to='/home' /> } /> 
          <Route path='/home' element={<Home />} />
          <Route path='/cars' element={<JdmCars />} />
        </Routes>

        <footer>
        <div className="container">
          <div className="footer_wrapper">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="footerItems">
              <FooterItems h3='OOO “AIS”' info1='DISIGN: Luxury' info2='DEVELOPED: Luxury' info3='LOH IS: Luxury' />
              <FooterItems h3='CONTACTS' info1='E-MAIL: krintmaster@gmail.com' info2='PHONE: 8(922) 500-26-26' info3='LOH IS: Luxury' />
              <FooterItems h3='SOCIAL MEDIA' info1='INSTA: markhiev.oo4' info2='TG: erenniga' info3='VK: mustangggggg' />
            </div>

          </div>
        </div>
      </footer>

      </BrowserRouter>

      

    </div>
  );
}

export default App;
