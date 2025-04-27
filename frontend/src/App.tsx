import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Opening from './pages/opening.tsx';
import Login from './pages/login.tsx';
import SignUp from './pages/signup.tsx';
import FlightInfo from './pages/flight_info.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/flightinfo" element={<FlightInfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
