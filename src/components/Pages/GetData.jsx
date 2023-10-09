import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Getdata = () => {
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
  return (
    <>
    <h2>Get</h2>
      <div className="mt-3 container">
        <form>
          <table className="table">
            <thead>
              <tr>
                <th>sr.no</th>
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
              {student.map((value, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.fname}</td>
                      <td>{value.lname}</td>
                      <td>{value.username}</td>
                      <td>{value.password}</td>
                      <td>{value.confirmPass}</td>
                      <td>{value.state}</td>
                      <td>{value.city}</td>
                      <td>{value.zip}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
  
}

export default Getdata
