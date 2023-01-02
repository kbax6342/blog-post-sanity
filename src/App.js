import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home'
import Blog from './pages/Blog'
import Blogpost from './pages/Blogpost'
import Error from './pages/Error'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:slug" element={<Blogpost />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
