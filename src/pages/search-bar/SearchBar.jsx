import React, { useContext } from 'react'
import './SearchBar.css'
import { ContextCart } from '../Context/Context'
export default function SearchBar() {
  const {Search} = useContext(ContextCart)

  return (
    <div className='row'>
        <div className="col-12">
            <input onInput={(e)=>Search(e.target.value)} className='w-100' type="text" placeholder='Enter your search' autoFocus/>
        </div>
    </div>
  )
}
