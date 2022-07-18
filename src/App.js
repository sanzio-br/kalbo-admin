// import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar'
import PostPackage from './components/form/PackageForm/PostPackage';
import Signing from './pages/login/Login';
import BlogPage from './pages/blogspage/Blogspage';
import Events from './pages/eventspage/EventsPage';
import PostBlog from './components/form/BlogForm/PostBlog';
import BookingInfo from './pages/packages/bookinginfo';
import Home from './pages/Home/Home';
import { Beach } from './pages/eventspage/packagetypes/Beach';
import { International } from './pages/eventspage/packagetypes/International';
import { Domestic } from './pages/eventspage/packagetypes/Domestic';
import { HoneyMoon } from './pages/eventspage/packagetypes/HoneyMoon';
import { Safari } from './pages/eventspage/packagetypes/Safari';
function App() {
  AOS.init();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className='container'>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Router>
      <Routes>
        <Route exact path='/' element={<Home isAuth={isAuth}/>}/>
        <Route exact path='/login' element={<Signing setIsAuth={setIsAuth}/>}/>
        <Route exact path='/blogs' element={<BlogPage/>}/>
        <Route exact path='/packages' element={<Events/>}/>
        <Route exact path='/post-package' element={<PostPackage isAuth={isAuth}/>}/>
        <Route exact path='/post-blog' element={<PostBlog isAuth={isAuth}/>}/>
        <Route exact path='/packages/:id' element={<BookingInfo/>}/>
        <Route exact path='/safari-packages' element={<Safari/>}/>
        <Route exact path='/international-packages' element={<International/>}/>
        <Route exact path='/domestic-packages' element={<Domestic/>}/>
        <Route exact path='/honeymoon-packages' element={<HoneyMoon/>}/>
        <Route exact path='/beach-packages' element={<Beach/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
