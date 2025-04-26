import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Opening from './pages/opening.tsx';
import Login from './pages/login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
