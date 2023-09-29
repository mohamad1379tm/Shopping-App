import React, { useContext } from 'react'
import { ContextCart } from '../Context/Context'
export default function Online() {
    const {itemShoping} = useContext(ContextCart)
  return (
    <div>Online
        {itemShoping.map((item)=>{
            return(
                <h1>{item.qty}</h1>
            )
        })}
    </div>
  )
}
