import React, { useEffect } from 'react'
import './Footer.css'
import { Cottage, Favorite, LocalGroceryStore } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  useEffect(() => {
    const _Li = document.querySelectorAll('.list')
    _Li.forEach((item)=>{
      item.addEventListener('click',(event)=>{
        _Li.forEach((item)=>{
          item.classList.remove('active')
        })
        event.target.classList.add('active')
      })
    })
  },[]);
  return (
    <div className='row col-12 col-md-8 m-0 position-absolute justify-content-center bottom-0 end-0'>
      <div className="Footer-item d-flex justify-content-around text-white align-items-center">
        <div className="navigation">
          <ul className='ul p-0 position-relative align-items-center justify-content-center d-flex m-0'>
            <NavLink to='/Favourites' className={({ isActive }) => (isActive ? "activeted" : '')}>
                <li className="list z-1 d-flex align-items-center justify-content-center position-relative">
                  <span className="icon position-relative d-flex align-items-center justify-content-center text-center"><Favorite/></span>
                </li>
            </NavLink >
            <NavLink to='/' className={({ isActive }) => (isActive ? "activeted" : '')}>
              <li className="list z-1 d-flex align-items-center justify-content-center position-relative">
                <span className="icon position-relative d-flex align-items-center justify-content-center text-center"><Cottage/></span>
              </li>
            </NavLink>
            <NavLink to='/Shopping' className={({ isActive }) => (isActive ? "activeted" : '')}>
              <li className="list z-1 d-flex align-items-center justify-content-center position-relative active">
                <span className="icon position-relative d-flex align-items-center justify-content-center text-center"><LocalGroceryStore/></span>
              </li>
            </NavLink>
            <div className="indicator position-absolute rounded-bottom-circle"></div>
          </ul>
        </div>
      </div>
    </div>
  )
}
 