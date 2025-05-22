import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/About';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import './index.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseList from './pages/Course';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
        
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1 className='not-found'>404 Not Found</h1>} />
          </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;