import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Products } from './pages/Products/Products'
import { Home } from './pages/Home/home'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { Newsletter } from './pages/Newsletter/Newsletter'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/menu" element={<Products />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
