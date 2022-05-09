import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Technical from './pages/Technical';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/technical' element={<Technical />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
