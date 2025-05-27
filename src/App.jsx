import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import './index.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import Enrollment from './components/Enrollment';
import AddCourse from './components/AddCourse';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
        
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/coursedetails" element={<CourseDetails/>}/>
            <Route path="/coursedetails/:id" element={<CourseDetails />} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1 className='not-found'>404 Not Found</h1>} />
          </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;