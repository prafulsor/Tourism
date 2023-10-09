import React from 'react'
import '../headers/header.css'

const serviceData = [
  {
    icon: 'fas fa-hotel',
    title: 'Afforadable Hotels',
    description:
      ' Escape to the epitome of luxury in our handpicked ultra-premium stays packed with signature services.',
    link: 'https://www.tourmyindia.com/states/rajasthan/',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Around the India',
    description:
      'India will reveal to you the places in your heart that must be purified.',
    link: 'https://www.tourmyindia.com/states/kerala/',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Food And Drinks',
    description:
      'Food is not just fueling; it’s an experience because every meal is a chance to indulge your senses and nourish your soul.',
    link: 'https://www.tourmyindia.com/states/himachal/',
  },
  {
    icon: 'fas fa-globe-asia',
    title: 'Safety Guide',
    description:
      'One earnest worker can do more by personal suggestion to prevent accidents than a carload of safety signs.',
    link: 'https://www.tourmyindia.com/states/sikkim/',
  },
  {
    icon: 'fas fa-plane',
    title: 'Fastest travel',
    description:
      'Get inspired, compare and book flights with more flexibility.',
    link: 'https://www.tourmyindia.com/states/karnataka/',
  },
  {
    icon: 'fas fa-hiking',
    title: 'Adventures',
    description:
      'Travelers are dreamers who make their desires for adventure a reality.',
    link: 'https://www.tourmyindia.com/states/tamilnadu/',
  },
]
const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="main-text">
            <h1>
              <span>S</span>ervices
            </h1>
          </div>

          <div className="row mt-3">
            {serviceData.map((val) => {
              return (
                <>
                  <div className="col-md-4 py-3 py-md-0 mt-3">
                    <a
                      href={val.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <div className="card" style={{ height: '250px' }}>
                        <i className={val.icon}></i>
                        <div className="card-body">
                          <h3>{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
