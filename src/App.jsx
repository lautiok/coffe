import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { Home } from './components/Home/home'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Newsletter } from './components/Newsletter/Newsletter'

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
