import React, { useEffect, useState } from 'react'
import SearchBar from './search-bar/SearchBar'
import '../App.css'
import Fillter from './fillter/Fillter'
import Products from './Products/Products'
import Footer from './Footer-Products/Footer'
export default function Home() {
  return (
    <div className='container-xxl King position-relative'>
      <div className="box-image">
        <div className="Left"></div>
        <div className="rigth"></div>
      </div>

      <div className="box-item col-12 h-100 z-3 position-absolute">
        <SearchBar/>

        <div className="Fillter d-md-flex z-3 w-100 h-100">
          <div className='col-md-4 z-3 col-12 Fillter-item'>
            <Fillter/>
          </div> 
          <div className='col-md-8 overflow-y-scroll col-12 h-100 scroll'>
            <Products/>
          </div>
        </div>   

        <Footer/>  

      </div>
    </div>
  )
}
