import React from 'react'
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Header = ({ loggned, setLogged }) => {
  const navigate = useNavigate()
  const loginOut = () => {
    localStorage.clear()
    setLogged(false)
    localStorage.setItem('loginuser', 'false')

    navigate('/')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/" id="logo">
            <span>T</span>ravel
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span i className="fa-solid fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/package">
                  Packages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-outline" to="/adminlogin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              {loggned == 'true' ? (
                <button className="nav-link btn btn-outline" onClick={loginOut}>
                  Log Out
                </button>
              ) : (
                <button
                  className="nav-link btn btn-outline"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              )}
            </li>

            <li className="nav-item">
              <NavLink className="nav-link btn btn-outline" to="/registration">
                Registration
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
