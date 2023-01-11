import React, { useState } from 'react';

import Fooddata from '../data';
import Logo from '../assets/searchFoodLogo.png';
import { Form } from 'react-bootstrap';
import Cards from './Cards';

const Food = () => {
    const [foodData, , setFoodData] = useState(Fooddata);
    console.log(foodData);
    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center">
                <img style={{ width: "4rem", cursor: "pointer" }} src={Logo} alt="" />
                <h2 style={{ color: "#26b2fd", textTransform: "uppercase" }}>Search Food</h2>
            </div>

            <Form className='mt-3 d-flex justify-content-center'>
                <Form.Group className="col-lg-4 mx-2" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Your Food" />

                </Form.Group>
            </Form>


            <section className='container mt-4'>
                <h2 className='px-4' style={{fontWeight: 700}}>Search Food is Open For All</h2>
            
                <div className='row mt-4 justify-content-around align-items-center'>
                       <Cards data={Fooddata} /> 
                </div>

            </section>

        </div>
    )
}

export default Food