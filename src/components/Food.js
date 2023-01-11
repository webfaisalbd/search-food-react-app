import React, { useEffect, useState } from 'react';

import Fooddata from '../data';
import Logo from '../assets/searchFoodLogo.png';
import { Form } from 'react-bootstrap';
import Cards from './Cards';
import SkeletonPage from './SkeletonPage';

const Food = () => {
    const [foodData, setFoodData] = useState(Fooddata);

    const [copyData, setCopyData] = useState([]);



    const changeData = (e) => {
        let getData = e.toLowerCase();

        if (getData === "") {
            setCopyData(foodData)
        } else {
            let store = foodData.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getData);
            })
            console.log(store)
            setCopyData(store);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCopyData(foodData);
        }, 3000);
    }, [])


    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center">
                <img style={{ width: "4rem", cursor: "pointer" }} src={Logo} alt="" />
                <h2 style={{ color: "#26b2fd", textTransform: "uppercase" }}>Search Food</h2>
            </div>

            <Form className='mt-3 d-flex justify-content-center'>
                <Form.Group className="col-lg-4 mx-2" controlId="formBasicEmail">
                    <Form.Control type="text"
                        onChange={(e) => changeData(e.target.value)}
                        placeholder="Search Your Food" />

                </Form.Group>
            </Form>


            <section className='container mt-4'>
                <h2 className='px-4' style={{ fontWeight: 600 }}>Search Food is Open For All</h2>

                <div className='row mt-4 justify-content-around align-items-center'>

                    {
                        copyData.length ? <Cards data={copyData} /> : <SkeletonPage data={foodData} />
                    }

                    

                </div>

            </section>

        </div>
    )
}

export default Food