import React, { useState } from 'react'
import '../headers/header.css'
const galleryData = [
  {
    title: 'MH',
    img: process.env.PUBLIC_URL + '/images/g1.png',
  },
  {
    title: 'MH',
    img: process.env.PUBLIC_URL + '/images/g2.jpg',
  },
  {
    title: 'MH',
    img: process.env.PUBLIC_URL + '/images/g3.png',
  },
  {
    title: 'MH',
    img: process.env.PUBLIC_URL + '/images/g8.png',
  },
  {
    title: 'Goa',
    img: process.env.PUBLIC_URL + '/images/g5.jpg',
  },
  {
    title: 'Goa',
    img: process.env.PUBLIC_URL + '/images/g7.png',
  },
  {
    title: 'Goa',
    img: process.env.PUBLIC_URL + '/images/jk1.jpeg',
  },
  {
    title: 'Goa',
    img: process.env.PUBLIC_URL + '/images/up1.png',
  },
  {
    title: 'UP',
    img: process.env.PUBLIC_URL + '/images/up2.png',
  },
  {
    title: 'UP',
    img: process.env.PUBLIC_URL + '/images/r1.png',
  },
  {
    title: 'UP',
    img: process.env.PUBLIC_URL + '/images/r2.png',
  },
  {
    title: 'UP',
    img: process.env.PUBLIC_URL + '/images/r3.png',
  },
  {
    title: 'MH',
    img: process.env.PUBLIC_URL + '/images/r4.png',
  },
  {
    title: 'HM',
    img: process.env.PUBLIC_URL + '/images/r5.png',
  },

  {
    title: 'HM',
    img: process.env.PUBLIC_URL + '/images/up3.png',
  },
  {
    title: 'punjab',
    img: process.env.PUBLIC_URL + '/images/up4.png',
  },
  {
    title: 'punjab',
    img: process.env.PUBLIC_URL + '/images/up5.png',
  },
  {
    title: 'punjab',
    img: process.env.PUBLIC_URL + '/images/p1.jpg',
  },
  {
    title: 'Kerla',
    img: process.env.PUBLIC_URL + '/images/p2.jpg',
  },
  {
    title: 'Kerla',
    img: process.env.PUBLIC_URL + '/images/p3',
  },
  {
    title: 'Kerla',
    img: process.env.PUBLIC_URL + '/images/u1.jpg',
  },
  {
    title: 'JM',
    img: process.env.PUBLIC_URL + '/images/u2.jpg',
  },
  {
    title: 'JM',
    img: process.env.PUBLIC_URL + '/images/u3.jpg',
  },
  {
    title: 'JM',
    img: process.env.PUBLIC_URL + '/images/u4.jpg',
  },
  {
    title: 'rj',
    img: process.env.PUBLIC_URL + '/images/u5.jpg',
  },
  {
    title: 'rj',
    img: process.env.PUBLIC_URL + '/images/u6.jpg',
  },
]
const Gallery = () => {
  const [filteredGalleryData, setFilteredGalleryData] = useState(galleryData)
  const [searchText, setSearchText] = useState('')
  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredGalleryData(galleryData)
    } else {
      const filteredData = galleryData.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      )
      setFilteredGalleryData(filteredData)
    }
  }
  return (
    <>
      <section class="gallary" id="gallary">
        <div class="container">
          <div class="main-txt">
            <h1>
              <span>G</span>allary
            </h1>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-3 offset-md-9">
              <div className="d-flex">
                <input
                  type="search"
                  name="search"
                  className="form-control"
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary ms-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            {filteredGalleryData.length ? (
              filteredGalleryData.map((val) => {
                return (
                  <>
                    <div class="col-md-4 py-3 py-md-0 mt-3">
                      <div class="card">
                        <img
                          src={val.img}
                          alt=""
                          height="200px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <div className="d-flex justify-content-center">
                Data Not Found
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
