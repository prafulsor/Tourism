import React from 'react'
import '../headers/header.css'
const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <div class="container">
          <div class="main-txt" style={{ paddingTop: '30px' }}>
            <h1>
              About <span>Us</span>
            </h1>
          </div>

          <div class="row" style={{ marginTop: '50px' }}>
            <div class="col-md-6 py-3 py-md-0">
              <div class="card">
                <img
                  src={process.env.PUBLIC_URL + '/images/india.jpg'}
                  alt=""
                />
              </div>
            </div>

            <div class="col-md-6 py-3 py-md-0">
              <h2>How Travel Agency Work.</h2>
              <p className="text-justify">
                Welcome to State Tourism! Explore our stunning landscapes, rich
                history, and vibrant culture. Discover natural wonders, from
                majestic mountains to pristine coastlines. Immerse yourself in
                captivating museums, historic sites, and ancient ruins. Embark
                on thrilling outdoor adventures, from hiking to water sports.
                Indulge in local cuisine, from fresh seafood to farm-to-table
                delights. Our commitment to sustainable tourism ensures a
                memorable and responsible journey. Plan your perfect trip with
                inspiring itineraries, accommodation options, and transportation
                details. Let us guide you through an extraordinary experience in
                State, where hidden gems and warm hospitality await. Start your
                adventure with State Tourism today.Explore, experience, and
                embrace the wonders of State – a place where beauty and culture
                collide.
              </p>
              <button id="about-btn">
                <a
                  href="https://www.technofunc.com/index.php/domain-knowledge/travel-and-tourism-domain/item/what-is-travel-tourism"
                  style={{ textDecoration: 'none', color: 'black' }}
                  target="_blank"
                >
                  Read More...
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
