import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './auth/signin';
import Login from './auth/login';
import { useState, useEffect } from 'react';
import Loader from './components/loder';  
import BasicPage from './pages/basicpage';
function App() {
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 800);  

    return () => clearTimeout(timer);  
  }, []);

  if (loading) {
    return <Loader />;  
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user' element={<BasicPage />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
