import React, { useContext } from 'react'
import './Productsitems.css'
import { ContextCart } from '../../Context/Context'
import { Link } from 'react-router-dom'
export default function Productsitems({item}) {
  const { AddCart , FavouriteItem , AboutProductItem} = useContext(ContextCart)


  return (
    <div className='product-fild position-relative'>
        <figure className='figure'>
            <img className='w-100' src={item.image} alt={item.category} />
        </figure>
        <div className="icon">
            <span onClick={(e)=>FavouriteItem(item , e)}><i class="bi bi-heart"></i></span>
            <Link onClick={()=>AboutProductItem(item)} to='/AboutProduct'>
              <span><i class="bi bi-book"></i></span>
            </Link>
        </div>
        <div className="item-product p-2">
          <h4>${item.price}</h4>
          <p>{item.category}</p>
          <button onClick={()=>AddCart(item)} className='AddToCart'>Add To Cart</button>
        </div>
    </div>
  )
}
