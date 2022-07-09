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
function App() {
  AOS.init();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className='container'>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Router>
      <Routes>
        <Route exact path='/admin' element={<Home isAuth={isAuth}/>}/>
        <Route exact path='/admin/login' element={<Signing setIsAuth={setIsAuth}/>}/>
        <Route exact path='/admin/blogs' element={<BlogPage/>}/>
        <Route exact path='/admin/safari-packages' element={<Events/>}/>
        <Route exact path='/admin/post-package' element={<PostPackage isAuth={isAuth}/>}/>
        <Route exact path='/admin/post-blog' element={<PostBlog isAuth={isAuth}/>}/>
        <Route exact path='/admin/safari-packages/:id' element={<BookingInfo/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
