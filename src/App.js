import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
import Portfolio from './pages/portfolio'
import Achievements from './pages/achievements'
import NotFound from './pages/notfound'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  return (
    <Router>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/achievements' element={<Achievements />} />
      <Route path='/notfound' element={<NotFound />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
      <Footer />
    </Router>
  )
}

export default App