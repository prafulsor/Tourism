import axios from 'axios'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../headers/header.css'
const Registration = () => {
  const availableStates = [
    'Maharashtra',
    'Goa',
    'Kearala',
    'Uttarakhand',
    'Punjab',
    'Andra Pradesh',
    'Assam',
    'Bihar',
    'Chattisgarh',
    'Gujrat',
    'Jammu And Kashmir',
    'Karnataka',
    'Madhya Pradesh',
    'Odisha',
    'Rajasthan',
    'Tamil Nadu',
    'Telangana',
    'Uttar Pradesh',
    'West Bengal',
  ]
  const [userData, setuserData] = useState([])
  const stateOptions = availableStates.map((state) => state)
  const [regData, setRegData] = useState({
    fname: '',
    lname: '',
    username: '',
    password: '',
    confirmPass: '',
    state: '',
    city: '',
    zip: '',
    checked: '',
  })
  const [loginData, setLoginData] = useState([])
  const [userNameError, setuserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateUserName = () => {
    const usernameRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (regData.username.length < 8) {
      setuserNameError("Username should be at least 8 characters long");
    } else if (!usernameRegex.test(regData.username)) {
      setuserNameError("Username should be a valid email address");
    } else {
      setuserNameError("");
    }
  };
  
  const validatePassword = () => {
    if (regData.password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
    } else if (!/[A-Z]/.test(regData.password)) {
      setPasswordError("Password should contain at least one uppercase letter");
    } else if (!/[a-z]/.test(regData.password)) {
      setPasswordError("Password should contain at least one lowercase letter");
    } else if (!/[0-9]/.test(regData.password)) {
      setPasswordError("Password should contain at least one number");
    } else {
      setPasswordError("wrong pass");
    }
  };
  
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
  console.log('userdata', userData)

  const handleInput = (e) => {
    const { value, name } = e.target
    const newData = { ...regData }
    newData[name] = value
    setRegData(newData)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    if (
      !regData.fname ||
      !regData.lname ||
      !regData.username ||
      !regData.password ||
      !regData.confirmPass ||
      !regData.state ||
      !regData.city ||
      !regData.zip
    ) {
      alert("All fields are mandatory");
      return;
    }
  
    
    if (regData.fname.length > 8 || regData.lname.length > 8) {
      alert("First name and last name should not be longer than 8 characters");
      return;
    }
  
    
    if (!/\d/.test(regData.username) || regData.username.length > 10) {
      alert(
        "Username should contain at least one number and should not be longer than 20 characters"
      );
      return;
    }
  
    
    if (!/^\d{6}$/.test(regData.zip)) {
      alert("Zip code should contain exactly 6 numbers");
      return;
    }
  
    
    if (regData.password !== regData.confirmPass) {
      alert("Password and confirm password do not match");
      return;
    }
  
    const filterData = userData.map(({ username }) => {
      return username;
    });
  
    if (filterData.includes(regData.username)) {
      alert("Username already exists");
    } else {
      axios
        .post("http://localhost:3000/user", regData)
        .then((res) => {
          setuserData(res.data);
          setRegData({
            fname: "",
            lname: "",
            username: "",
            password: "",
            confirmPass: "",
            state: "",
            city: "",
            zip: "",
            checked: "",
          });
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  
  console.log('second', loginData)
  localStorage.setItem('loginDetails', JSON.stringify(loginData))

  return (
    <div>
      <div className="wrapper text-center container">
        <div className="mb-4">
          <a className="navbar-brand" id="logo">
            <span>R</span>egistration <span>F</span>orm{' '}
          </a>
        </div>
        <form
          className="row g-3 needs-validation"
          noValidate
          style={{ backgroundColor: '#f9f9f9', borderRadius: '15px' }}
        >
          <div className="col-lg-6 offset-lg-3 col-sm-12 col-md-12 d-flex  flex-column">
            <div>
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={regData.fname}
                name="fname"
                onChange={handleInput}
                pattern="[A-Za-z]+"
                placeholder="fname"
                maxLength={10}
                minLength={4}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div>
              <label htmlFor="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={regData.lname}
                name="lname"
                onChange={handleInput}
                pattern="[A-Za-z]+"
                placeholder="lname"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div>
              <label htmlFor="validationCustomUsername" className="form-label">
                Username
              </label>
              <div className="input-group has-validation d-flex flex-column">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={regData.username}
                    onChange={handleInput}
                    placeholder="username"
                    required
                    onBlur={validateUserName}
                  />
                </div>
                <div>
                  {userNameError && <p style={{color:"red"}} className="error">{userNameError}</p>}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="validationCustompass1" className="form-label">
                Create Password
              </label>
              {/* <!-- <input type="password" name="form-control" id=""> --> */}
              <input
                type="password"
                className="form-control"
                id="validationCustompass1"
                value={regData.password}
                onChange={handleInput}
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Password"
                required
                onBlur={validatePassword}
              />
              {passwordError && <span style={{color:"red"}} className="error">{passwordError}</span>}

              <div className="invalid-feedback">
                Must contain at least one number and one uppercase and lowercase
                letter, and at least 8 or more characters
              </div>
            </div>

            <div>
              <label htmlFor="validationCustompass" className="form-label">
                Confirm Password
              </label>
              {/* <input type="password" name="form-control" id="">  */}
              <input
                type="password"
                className="form-control"
                id="validationCustompass"
                value={regData.confirmPass}
                name="confirmPass"
                onChange={handleInput}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="ConfirmPassword"
                required
              />
              <div className="invalid-feedback">
                Must contain at least one number and one uppercase and lowercase
                letter, and at least 8 or more characters
              </div>
            </div>

            <div>
              <label htmlFor="validationCustom04" className="form-label">
                State
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                value={regData.state}
                name="state"
                onChange={handleInput}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                {stateOptions.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div>
              <label htmlFor="validationCustom03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                value={regData.city}
                name="city"
                onChange={handleInput}
                pattern="[A-Za-z]+"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

            <div>
              <label htmlFor="validationCustom05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                value={regData.zip}
                name="zip"
                onChange={handleInput}
                pattern="[0-9]+"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input mt-3"
                  type="checkbox"
                  value={regData.checked}
                  name="checked"
                  onChange={handleInput}
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree behtmlFore submitting.
                </div>
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
          </div>
          <NavLink to="/Login" className="signup-link mt-2 mb-2">
            already register
          </NavLink>
        </form>
      </div>
    </div>
  )
}
export default Registration
