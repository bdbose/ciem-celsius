import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';
import RegisterEvent from './pages/Register';
import ComingSoon from './pages/soon';
import Sports from './pages/Sports';
import SportsPreview from './pages/SportsPreview';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/technical' element={<Technical />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/sports-event/:id' element={<SportsPreview />} />
          <Route path='/register/:id' element={<RegisterEvent />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
          <Route path='/*' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
