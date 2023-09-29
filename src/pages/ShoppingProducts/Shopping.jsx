import React, { useContext, useEffect, useRef, useState } from 'react'
import Footer from '../Footer-Products/Footer'
import { ContextCart } from '../Context/Context'
import './Shopping.css'
import { useNavigate } from 'react-router'

// import { useNavigate } from 'react-router'
// ایتم محصولات
export default function Shopping() {

  const { itemShoping  , Plass , Min} = useContext(ContextCart)

  const itemprice = itemShoping.reduce((a , c) => a + c.price * c.qty, 0)

  const ShippingCost = itemprice + 2000;


  const Navigate = useNavigate()




  return (
    <div className='container-xxl King King-Shoping'>
      <h1 className='text-center z-3 text-white mt-3'>Shopping</h1>
      {/* بکگراند صفحه */}
      <div className="box-image">
        <div className="Left"></div>
        <div className="rigth"></div>
      </div>


      <div className='h-100 z-3 col-12 position-relative d-md-flex Shopping-scroll'>
        {/* آیتم های محصولات */}
        <div className='Shopping-item col-md-4 d-flex justify-content-evenly flex-wrap col-lg-3'>

          {itemShoping.map((item)=>{
            console.log(item);
            return(
              <div className='col-md-12 d-flex m-2 align-items-center justify-content-center col-Shopping'>

                <div className='product-fild-Shopping position-relative'>
                  <figure className='figure'>
                      <img className='w-100' src={item.image} alt={item.category} />
                  </figure>
                  <div className="icon">

                    <span className='spanShopping d-flex align-items-center justify-content-center rounded-circle' onClick={()=>Plass(item)}>+</span>

                    <span className='spanShopping d-flex align-items-center justify-content-center rounded-circle'>{item.qty}</span>

                    <span className='spanShopping d-flex align-items-center justify-content-center rounded-circle' onClick={()=>Min(item)}>-</span>
                  </div>
                  <div className="item-product h-100 position-sticky p-2">
                    <h4>${item.price}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

        {/* parent Box */}
        <div className="box p-lg-5 col-12 col-md-8 col-lg-9">

          <Box itemprice={itemprice} ShippingCost={ShippingCost} itemShoping={itemShoping} Navigate={Navigate}/>

        </div>

      </div>

      <Footer/>
    </div>
  )
}

// باکس کلی (روش پرداخت و فاکتور خرید و خرید نهای)
function Box({itemprice , ShippingCost , itemShoping , Navigate}){

  const Refonline = useRef()

  const RefPayment = useRef()

  function SubmitClick(item){
    if(Refonline.current.checked){
      Navigate('/Online')
    }else{
      if(RefPayment.current.checked){
        Navigate('/PayAtHome')
      }
    }
  }

  return(
    <>
      <div className="Box-item mb-2 text-white col-12 d-flex text-start justify-content-md-around flex-column flex-md-row">
        {/* محاسبه قیمت ها */}
        <div className="Purchase-left pt-3 ps-3 pe-3 p-md-2">
          <h4 className='text-start'>Purchase Invoice</h4>

          <div className="Total-price align-items-center d-flex justify-content-between">
            <h6>Total price</h6>
            <span>${itemprice.toFixed(2)}</span>
          </div>

          <div className="shipping-cost align-items-center d-flex justify-content-between">
            <h6>shipping cost</h6>
            <span>$2000</span>
          </div>

        </div>
        {/* روش پرداخت */}
        <div className="Payment-Rigth pt-3 ps-3 pe-3 p-md-2">
          <h4 className='text-start'>Payment Method</h4>
          {/* پرداخت اینترنتی */}
          <div className="Total-price align-items-center d-flex justify-content-between">
            <label For="online">online payment</label>
            <input ref={Refonline} type="radio" name='Payment' id='online' />
          </div>
          {/* پرداخت درب منزل */}
          <div className="shipping-cost align-items-center d-flex justify-content-between">
            <label For="Pay-at-home">Pay at home</label>
            <input ref={RefPayment} type="radio" name='Payment' id='Pay-at-home'/>
          </div>

          <div className="shipping-cost align-items-center d-flex p-3 bg-black rounded-5 justify-content-between">
            <h6 className='m-0 price-postage'>Total price with postage :</h6>
            <span>${ShippingCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/* دکمه خرید نهای */}
      <Submit itemShoping={itemShoping} SubmitClick={SubmitClick}/>
  
    </>

  )
}


// دکمه صفحه پرداخت ها
function Submit({itemShoping , SubmitClick}){

  return(
    <div className="bottom-submit d-flex align-items-center justify-content-end me-5 w-100">
      <p onClick={()=>SubmitClick(itemShoping)} className='p-2 rounded-5 m-0 border-2 border text-white border-black'>Buy</p>
    </div>
  )
}






