import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../headers/header.css'
const Book = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    noOfPerson: 0,
    arrDate: '',
    leaveDate: '',
    details: '',
  })
  const [bookingList, setBookingList] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios
      .get('http://localhost:3000/book')
      .then((res) => {
        setBookingList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handelInputChange = (e) => {
    const { name, value } = e.target
    const newData = { ...formData }
    newData[name] = value
    setFormData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (
      !formData.from ||
      !formData.to ||
      !formData.noOfPerson ||
      !formData.arrDate ||
      !formData.leaveDate ||
      !formData.details
    ) {
      alert("All fields are mandatory");
      return;
    }
  
    const newBooking = [...bookingList];
    newBooking.push(formData);
    setBookingList(newBooking);
  
    axios
      .post("http://localhost:3000/book", formData)
      .then((res) => {
        setBookingList(res.data);
        setFormData({
          from: "",
          to: "",
          noOfPerson: 0,
          arrDate: "",
          leaveDate: "",
          details: "",
        });
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  console.log('bookingList', bookingList)
  localStorage.setItem('bookingData', JSON.stringify(bookingList))
  return (
    <>
      <section className="book" id="book">
        <div className="container">
          <div className="main-text">
            <h1>
              <span>B</span>ook
            </h1>
          </div>

          <div className="row">
            <div className="col-md-6 py-3 py-md-0">
              <div className="card">
                <img src="images/book3" height="540px" />
              </div>
            </div>
            <div className="col-md-6 py-3 py-md-0">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  name="from"
                  value={formData.from || ''}
                  pattern="[A-Za-z]{1,10}"
                  placeholder="From"
                  required
                  onChange={handelInputChange}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  value={formData.to || ''}
                  pattern="[A-Za-z]{1,10}"
                  placeholder="Destination"
                  required
                  onChange={handelInputChange}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="noOfPerson"
                  value={formData.noOfPerson || ''}
                  pattern="[0-9]{1,2}"
                  placeholder="How Many Person"
                  required
                  onChange={handelInputChange}
                />
                <br />
                <input
                  type="date"
                  className="form-control"
                  name="arrDate"
                  value={formData.arrDate || ''}
                  placeholder="Arrivals date"
                  required
                  onChange={handelInputChange}
                />
                <br />
                <input
                  type="date"
                  className="form-control"
                  name="leaveDate"
                  value={formData.leaveDate || ''}
                  placeholder="Leaving date"
                  required
                  onChange={handelInputChange}
                />
                <br />
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter Your Name & Details"
                  name="details"
                  value={formData.details || ''}
                  required
                  onChange={handelInputChange}
                ></textarea>
                <input
                  type="submit"
                  value="Book Now"
                  className="submit"
                  onClick={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Book
