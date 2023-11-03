import React, { useContext } from 'react'
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext' 

const ShopCatagory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-catagory'>
      <img className='Shopcategory-banner' src={props.banner} alt="" width='80%'/>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCatagory