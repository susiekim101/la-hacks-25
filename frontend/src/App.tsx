import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Opening from './pages/opening.tsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <li><Link to="/">Home</Link></li>
      </div>

      <Routes>
        <Route path="/" element={<Opening/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
