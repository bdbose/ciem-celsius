import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';
import RegisterEvent from './pages/Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/technical' element={<Technical />} />
          <Route path='/register/:id' element={<RegisterEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
