import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostData = () => {
  const [student, setdata] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user`)
      .then((response) => {
        console.log(response)
        setdata(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const postData = () => {
    const addData = {
      fname,
      lname,
      username,
      password,
      confirmPass,
      state,
      city,
      zip,
    }
    // console.log(name+age)
    axios.post(`http://localhost:3000/user`, addData).then((response) => {
      console.log('post', response.data)
      setdata(response.data)
    })
  }
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPass, setconfirmPass] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')
  const [zip, setzip] = useState('')

  return (
    // <>
    // <h2>Post Data</h2>
    //   <input
    //     type="text"
    //     value={fname}
    //     onChange={(e) => setfname(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={lname}
    //     onChange={(e) => setlname(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={username}
    //     onChange={(e) => setusername(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={password}
    //     onChange={(e) => setpassword(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={confirmPass}
    //     onChange={(e) => setconfirmPass(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={state}
    //     onChange={(e) => setstate(e.target.value)}
    //   ></input>
    //   <input
    //     type="text"
    //     value={city}
    //     onChange={(e) => setcity(e.target.value)}
    //   ></input>
    //   <input
    //     type="number"
    //     value={zip}
    //     onChange={(e) => setzip(e.target.value)}
    //   ></input>
    //   <button onClick={postData}>OK</button>
    // </>
    <>
      <h2>Post</h2>
      <div className="mt-3 container">
        <form>
          <table className="table">
            <thead>
              <tr>
                <th>fname</th>
                <th>lname</th>
                <th>usernmae</th>
                <th>password</th>
                <th>Cpassword</th>
                <th>state</th>
                <th>city</th>
                <th>zip</th>
              </tr>
            </thead>
            <tbody>
                  <>
                    <tr>
                      <td>
                        <input
                          type="text"
                          value={fname}
                          style={{ width: '100px' }}
                          onChange={(e) => setfname(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={lname}
                          style={{ width: '100px' }}
                          onChange={(e) => setlname(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={username}
                          style={{ width: '100px' }}
                          onChange={(e) => setusername(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={password}
                          style={{ width: '100px' }}
                          onChange={(e) => setpassword(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={confirmPass}
                          style={{ width: '100px' }}
                          onChange={(e) => setconfirmPass(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={state}
                          style={{ width: '100px' }}
                          onChange={(e) => setstate(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        {' '}
                        <input
                          type="text"
                          value={city}
                          style={{ width: '100px' }}
                          onChange={(e) => setcity(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="number"
                          value={zip}
                          style={{ width: '100px' }}
                          onChange={(e) => setzip(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <button onClick={postData}>OK</button>
                      </td>
                    </tr>
                  </>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default PostData
