import React from 'react'
import { NavLink } from 'react-router-dom'

import '../headers/header.css'
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
          <h5>Welcome to India</h5>
          <h1>
            Visit <span className="changecontent"></span>
          </h1>
          <p>
            One’s destination is never a place, but a new way of seeing things.
          </p>
          <NavLink to="/book">Book Place</NavLink>
        </div>
      </div>
    </>
  )
}

export default Home
