import React from 'react'
import { NavLink } from 'react-router-dom'
import '../headers/header.css'

const packageData = [
    {
        title: "Maharasthra",
        description: "Maharashtra is a beautiful destination in India because of its jagged hills, fantastic temperature, delicious meals, and exciting activities.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/maharastra3',
        rating: 5
    },
    {
        title: "Jammu & Kashmir",
        description: "Jammu and Kashmir is a popular tourist destination due to its scenic beauty. Some of its popular tourist destinations include the ski resorts of Gulmarg and the tranquil lakes.",
        price: "₹40k",
        image: process.env.PUBLIC_URL + '/images/jk2.jpg',
        rating: 3
    },
    {
        title: "Goa",
        description: "Goa is probably the hippest state in India. It has tourist places such as the Church of Our Lady of the Immaculate Conception and the Goa State Museum.",
        price: "₹20k",
        image: process.env.PUBLIC_URL + '/images/GOA.jpg',
        rating: 4
    },
    {
        title: "Uttarakhand",
        description: "Uttarakhand is known for its lakes and mountains, such as the Nainital Lake and the famous points of Mussoorie.",
        price: "₹45k",
        image: process.env.PUBLIC_URL + '/images/uthrakhand.jpg',
        rating: 2,
    },
    {
        title: "Rajasthan",
        description: "Rajasthan is located in northwestern India and is home to some of the most beautiful architecture in the country.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/rajasthan.png',
        rating: 5
    },
    {
        title: "Punjab",
        description: "Punjab has many tourist places, such as the Golden Temple in Amritsar, the Rock Garden in Chandigarh, and the Qila Mubarak in Patiala.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/punjab.png',
        rating: 4
    },
    {
        title: "Uttar Pradesh",
        description: "Uttar Pradesh is home to some of the most outstanding manufactured structures and natural wonders. This state encourages natural curiosity.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/uttar pradesh.png',
        rating: 2
    },
    {
        title: "Kerala",
        description: "Kerala, nicknamed 'God's Own Country,' is one of the most beautiful states in the country. It is one of the top tourist destinations in the world.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/kerala',
        rating: 4
    },
    {
        title: "Himachal Pradesh",
        description: "Due to the Himalayan terrain and Shivalik hills around it, it is a favourite pilgrimage destination for everybody",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/himachal pradesh',
        rating: 3
    },
    {
        title: "West Bengal",
        description: "West Bengal is known for its cultural significance, handicrafts, and historical structures. Poetry, music, cinema, and drama abound in this space.",
        price: "₹50k",
        image: process.env.PUBLIC_URL + '/images/west bengal',
        rating: 2

    }
]
const Package = () => {
    return (
        <>
            <section className="packages" id="packages">
                <div className="container">
                    <div className="main-txt">
                        <h1><span>P</span>ackages</h1>
                    </div>
                    <div className="row" >
                        {
                            packageData && packageData.map((item) => {
                                return (
                                    <>
                                        <div className="col-md-4 py-3 py-md-0 mt-3">
                                            <div className="card" style={{ height: "520px" }}>
                                                <img src={item.image} className='img-fluid card-img-top' alt="" />
                                                <div className="card-body">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <div className="star">
                                                        {[...Array(5)].map((_, index) => (
                                                            <i
                                                                key={index}
                                                                className={`fa-solid fa-star ${index < item.rating ? "checked" : ""}`}
                                                            ></i>
                                                        ))}
                                                    </div>
                                                    <h6>price: <strong>{item.price}</strong></h6>
                                                    <NavLink to="/book">Book Now</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Package