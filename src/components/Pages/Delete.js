import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Delete = () => {
  const [student, setdata] = useState([])
  useEffect(() => {
    console.log('kkkkkkkkkkkkkkkkk', useEffect)
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

  function DeleteData(idx1) {
    let Id
    student.forEach((value, index) => {
      if (idx1 === index) {
        Id = value.id
      }
    })
    axios.delete(`http://localhost:3000/user/${Id}`).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <>
      <h2>Delete</h2>
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

                      <button onClick={() => DeleteData(index)}>Delete</button>
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

export default Delete
