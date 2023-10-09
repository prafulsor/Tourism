import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [userData, setuserData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggned, setLogged] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios
      .get('http://localhost:3000/user')
      .then((res) => {
        setuserData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const filterData = userData.map(({ id, username, password }) => {
    return { id, username, password }
  })

  const handleSubmit = () => {
    // Check if the username and password fields are not empty
    if (!username || !password) {
      alert("Please enter a username and password");
      return;
    }
  
    const filterLoginDetails = filterData.filter((value) => {
      return value.username === username && value.password === password;
    });
  
    // Check if the entered credentials match any user credentials
    if (filterLoginDetails.length !== 0) {
      alert("Success");
      localStorage.setItem("loginuser", "true");
      //setLogged(true);
      navigate("/book");
    } else {
      alert("Invalid user");
      setLogged(false);
    }
  };
  
 // localStorage.setItem('loginuser', loggned)
  console.log('filterData', filterData)
  return (
    <>
      <div>
        <div className="wrapper text-center container">
          <div className="mb-4">
            <a className="navbar-brand" id="logo">
              <span>L</span>ogin<span>F</span>orm
            </a>
          </div>
          <form
            className="row g-3 needs-validation"
            noValidate
            style={{ backgroundColor: '#f9f9f9', borderRadius: '15px' }}
          >
            <div className="col-lg-6 offset-lg-3 col-sm-12 col-md-12 d-flex  flex-column">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>

              <div>
                <label htmlFor="validationCustompass1" className="form-label">
                  Password
                </label>
                {/* <!-- <input type="password" name="form-control" id=""> --> */}
                <input
                  type="password"
                  className="form-control"
                  id="validationCustompass1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password..."
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
                <div className="invalid-feedback">
                  Must contain at least one number and one uppercase and
                  lowercase letter, and at least 8 or more characters
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit form
                </button>
              </div>
              <NavLink to="/Registration" className="signup-link mt-2 mb-2">
                Create Account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

// import React, { useState } from 'react'

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const authData = localStorage.getItem("loginDetails")
//     // console.log("first++++", authData);
//     // const filterData=
//     const handleLogin = () => {

//     }

//     return (

//     )
// }

// export default Login

// {/* <div>
//                                 <label htmlFor="">Username</label>
//                                 <input type="text" name="username" id=""
//                                     className='form-control'
//                                     value={username}
//                                     onChange={(e)=>setUsername(e.target.value)}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="">Password</label>
//                                 <input type="text" name="password" id=""
//                                     className='form-control'
//                                     value={password}
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                 />
//                             </div> */}
