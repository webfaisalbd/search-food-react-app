import React from 'react'

import { Card } from 'react-bootstrap'
const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((d) => {
                    return <Card key={d.id} style={{ width: '22rem' }} className="p-3 mb-3 border-0 hoverStyle" >
                        <Card.Img variant="top" className='cardImg' src={d.imgdata} />
                        <div className="card_body">
                            <div className="upperCard mt-2 d-flex justify-content-between align-items-center">
                                <h3>{d.rname}</h3>
                                <span>{d.rating}★</span>
                            </div>


                            <div className="lowerCard d-flex justify-content-between align-items-center">
                                <h5>{d.address}</h5>
                                <span>{d.price}</span>
                            </div>

                            <div className="cardLine"></div>


                            <div className="lastCard mt-3 d-flex justify-content-between">
                                <img className='img1' src={d.arrimg} alt="" />
                                <p>{d.somedata}</p>
                                <img className='img2' src={d.delimg} alt="" />
                            </div>


                        </div>
                    </Card>
                })
            }
        </>
    )
}

export default Cards