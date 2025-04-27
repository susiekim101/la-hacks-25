import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Opening from './pages/opening.tsx';
import Login from './pages/login.tsx';
import SignUp from './pages/signup.tsx';
import Verification from './pages/verification.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
