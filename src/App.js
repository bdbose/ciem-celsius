import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';
import RegisterEvent from './pages/Register';
import ComingSoon from './pages/soon';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/technical' element={<Technical />} />
          <Route path='/sports' element={<ComingSoon />} />
          <Route path='/register/:id' element={<RegisterEvent />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
          <Route path='/*' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
