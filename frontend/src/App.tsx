import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Opening from './pages/opening.tsx';
import Login from './pages/login.tsx';
import SignUp from './pages/signup.tsx';
import Feed from './pages/feed.tsx';
import Profile from './pages/profile.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
