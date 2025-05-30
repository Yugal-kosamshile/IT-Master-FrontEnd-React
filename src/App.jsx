import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import './index.css';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import AddCourse from './components/AddCourse';
import NotFound from './components/NotFound';
import UpdateCourse from './components/UpdateCourse';
import Courses from './pages/Courses';
import { AppProvider } from './appContext/AppContext';


function App() {

  return (
    <AppProvider>
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
        
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/coursedetails" element={<CourseDetails/>}/>
            <Route path="/coursedetails/:id" element={<CourseDetails />} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/dashboard" element={<Dashboard />}/> 
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/update-course/:id" element={<UpdateCourse/>} />
          </Routes>

        <Footer />
        </div>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;