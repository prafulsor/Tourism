import { useState, useEffect } from 'react'
import axios from 'axios'

const PutData = () => {
  const [student, setdata] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user`)
      .then((response) => {
        console.log('response', response)
        setdata(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPass, setconfirmPass] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')
  const [zip, setzip] = useState('')
  const [idx1, setidx] = useState('')

  function selectuser(idx) {
    console.log('mmmmmmmmmmmmmmmmmmmmmmmm', student[idx])
    let ran = student[idx]
    setfname(ran.fname)
    setlname(ran.lname)
    setusername(ran.username)
    setpassword(ran.password)
    setconfirmPass(ran.confirmPass)
    setstate(ran.state)
    setcity(ran.city)
    setzip(ran.zip)
    setidx(idx)
    console.log('lllllllllllllllllllllllllllll', idx)
  }
  function putData() {
    let dsg = {
      fname,
      lname,
      username,
      password,
      confirmPass,
      state,
      city,
      zip,
    }
    let Id
    student.forEach((value, index) => {
      console.log(index, 'KKKKKKKKKKKKKKKKKKKKKKKKKKKK')
      if (idx1 === index) {
        Id = value.id
        console.log(Id, 'ID', value.id, 'valueee')
      }
    })
    axios
      .put(`http://localhost:3000/user/${Id}`, dsg)
      .then((response) => {
        console.log('pppppppppppppppppppppppppppppppp', response.data)
      },50000)
      .catch((err) => {
        console.log(dsg)
        console.log('error', err)
      })
  }
  return (
    <>
      <div className="mt-3 container">
        <table className="ctable">
          <thead>
            <tr>
              <th>sr.no</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Images</th>
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
                    <button onClick={() => selectuser(index)}>Edit</button>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <form>
          <input
            type="text"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          ></input>
          <input
            type="text"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          ></input>
          <button onClick={putData}>OK</button>
        </form>
      </div>
    </>
  )
}

export default PutData
