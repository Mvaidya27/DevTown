import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exc.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY BEST SELLER PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers_right">
            <img src={exclusive_img} alt="" width='350px'/>
        </div>
    </div>
  )
}

export default Offers