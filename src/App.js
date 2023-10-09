import './App.css'
import Header from './components/headers/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Book from './components/Pages/Book'
import Package from './components/Pages/Package'
import Gallery from './components/Pages/Gallery'
import Services from './components/Pages/Services'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Registration from './components/login/Registration'
import Login from './components/login/Login'
import { useState } from 'react'
import AdminLogin from './components/login/AdminLogin'
import Admindetail from './components/Pages/Admindetail'
function App() {
  const loggedIn = localStorage.getItem('loginuser')
  const [loggned, setLogged] = useState(loggedIn)
   const AdminloggedIn = localStorage.getItem('loginadmin')
  const [adminloggned, setadminloggned] = useState(AdminloggedIn)
  console.log('loggned', loggned)
  return (
    <div className="App">
      <Header loggned={loggned} setLogged={setLogged} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book"
          element={loggned == 'true' ? <Book /> : <Login />}
        />
        {/* <Route path="/book" element={<Book />} /> */}
        <Route path="/package" element={<Package />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
         <Route
          path="/admindetail"
          element={adminloggned == 'true' ? <Admindetail /> : <AdminLogin />}
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
