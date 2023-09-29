import React, { useContext } from 'react'
import { ContextCart } from '../Context/Context'
import './AboutProduct.css'
export default function AboutProduct() {
    const {about} = useContext(ContextCart)
  return (
    <div className='King container-xxl overflow-x-hidden'>
        <h1 className='text-center text-light mt-4'>AboutProduct</h1>
        <div className="box-image">
            <div className="Left"></div>
            <div className="rigth"></div>
        </div>

        {about.map((item)=>{
            return(
                <div className='h-100 overflow-scroll'>
                    <div className="row">

                        <div className=" col-12">
                            <figure className='figure-image'>
                                <img src={item.image} alt={item.category} />
                                <h3 className='description'>{item.description}</h3>
                            </figure>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
