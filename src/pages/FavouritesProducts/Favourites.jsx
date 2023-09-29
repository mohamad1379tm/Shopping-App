import React, { useContext } from 'react'
import Footer from '../Footer-Products/Footer'
import { ContextCart } from '../Context/Context'
import './Favourites.css'
export default function Favourites() {
  const { favourite } = useContext(ContextCart)
  return (
    <div className='container-xxl King'>
      <h1 className='h21'>Favourites</h1>
      <div className="box-image">
        <div className="Left"></div>
        <div className="rigth"></div>
      </div>


      <div className="row justify-content-around favouritemap">
      {favourite.map((item)=>{
        return(
          <div className='product-fild position-relative'>
              <figure className='figure'>
                  <img className='w-100' src={item.image} alt={item.category} />
              </figure>
              <div className="icon">
                  <span className={item.color}><i class="bi bi-heart"></i></span>
                  <span><i class="bi bi-book"></i></span>
              </div>
              <div className="item-product p-2">
                <h4>${item.price}</h4>
                <p>{item.category}</p>
                <h4 className='red text-center'>Favourites</h4>
              </div>
          </div>
        )
      })}
      </div>


       







      <Footer/>
    </div>
  )
}
