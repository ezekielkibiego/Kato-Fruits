import React from 'react'
import bg1 from '../assets/images/bg1.jpg'
import Products from '../products/Products';
const Home = () => {
    return (
        <div className='kato' >
            <div className="card border-0">
                <img src= {bg1} className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Get Fresh Fruits</h5>
                        <p className="card-text lead fs-2">From the Best Store at Affordable Prices</p>
                    </div>

                </div>
            </div>
        <Products/>
        </div>
    );
};

export default Home