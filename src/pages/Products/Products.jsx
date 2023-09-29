import React, { useContext } from 'react'
import './Products.css'
import { ContextCart } from '../Context/Context'
import Productsitems from './AllProductsItem/Productsitems'
export default function Products() {
  const {item} = useContext(ContextCart)
  return (
    <div> 
      <h1 className='mb-5 mt-5 text-white text-center'>Products</h1>
      <div className="row justify-content-around align-items-center p-4 flex-wrap row-product">
      {item.map((items)=>{
        return(
          <Productsitems key={item.id} item={items}/>
        )
      })}

      </div>
    </div>
  )
}
