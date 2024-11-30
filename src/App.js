import React from 'react'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage';
// import MainPage from './components/MainPage'
import BlogPage from './components/BlogPage/BlogPage';
import SiteMap from './components/SiteMap/sitemap';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
         <Route path='/blogpage' element={<BlogPage/>}/>
         <Route path='/sitemap' element={<SiteMap/>}/>
         
        </Routes>
      </Router>
    </div>
  )
}

export default App