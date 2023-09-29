import axios from 'axios'
import React, { createContext, useEffect, useReducer, useRef, useState } from 'react'
// import { useNavigate } from 'react-router'


export const ContextCart = createContext()

const itemProduct = {
  item : [],
  itemPrice : null,
}

function reducer(state , action){
  switch (action.type) {
    case "product":
      return {item : action.itemdata}
      case "itemPrice":
        return {itemPrice : action.price}
  
    default:
      return state
  }
}

export default function Context({ children }) {

  const [ state , dispatch] = useReducer(reducer , itemProduct)
  const {item} = state
  
  // delete all useSate and move them to reducer
  // const [item , setItem] = useState([])

  const [itemPrice, setItemPrice] = useState(item)


  const [itemShoping, setItemShoping] = useState([])


  const [favourite, setFavourite] = useState([])

  const [about, setAbout] = useState([])
  const [event, setEvent] = useState([])



  const [counter, setCounter] = useState(false)

  const [category, setCategory] = useState([])

  const [itemSearch, setItemSearch] = useState([])

  // const navigate = useNavigate()

  const [valueRange, setValueRange] = useState([0, 1000]);





  useEffect(() => {
    // fetch('https://fakestoreapi.com/products?limit=26')
    // .then(response => response.json())
    // .then(item =>{
    //   setItem(item)
    // }) 
    const fetchh = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products?limit=26')
      // setItem(data)
      dispatch({type:"product" , itemdata : data})
      setItemPrice(data)
      setItemSearch(data)
    }
    fetchh()
  }, [])



  // useEffect(() => {
  //   const fetchh = async () => {
  //     const { data } = await axios.get('https://fakestoreapi.com/products?limit=26')
  //     setItemPrice(data)
  //     // dispatch({type : 'itemPrice' , price : data})
  //   }
  //   fetchh()
  // }, [])





  function AddCart(item) {
    const data = itemShoping.find((items) => (items.id === item.id))
    if (!data) {
      setItemShoping([...itemShoping, { ...item , qty : 1 }])
      console.log(item);
      setCounter(counter)
      console.log(itemShoping);
    }
  }


  function Plass(item) {
    const data = itemShoping.find((items) => items.id === item.id)
    if (data) {
      setItemShoping(itemShoping.map((Product) => Product.id === item.id ? { ...Product, qty: Product.qty + 1 } : Product))
    }
  }


  function Min(item) {
    const data = itemShoping.find((items) => items.id === item.id)
    if (data) {
      setItemShoping(itemShoping.map((Product) => Product.id === item.id ? { ...data, qty: data.qty - 1 } : Product))
      if (data.qty == 1) {
        setItemShoping(itemShoping.filter(x => x.id !== item.id))
      }
    }
  }



  function FavouriteItem(item, e) {
    const dataFava = favourite.find((items) => items.id === item.id)
    if (!dataFava) {
      setFavourite([...favourite, { ...item, color: 'red' }])
      // Reffav.current.style.color = 'red'
      // setIsClicked(e.target.classList.add('red'))
    }
    console.log(e.target);
  }


  function Price() {
    let update = itemPrice

    const minvalue = valueRange[0]
    const maxvalue = valueRange[1]

    let FilterPrice = update.filter(item => item.price >= minvalue && item.price <= maxvalue)

    let FilterProd = FilterPrice.filter(item => item.category === category)

    counter == true ? dispatch({type:"product" , itemdata : FilterProd}) : dispatch({type:"product" , itemdata : FilterPrice})
  }




  useEffect(() => {
    Price()
  }, [valueRange])


  function BottomFillter(e) {
    let updateProduct = itemPrice
    const minvalue = valueRange[0]
    const maxvalue = valueRange[1]
    let target = e.target.innerText
    setCategory(target)
    let FilterProd = updateProduct.filter(item => item.category === target)
    let FillterPriceandProduct = FilterProd.filter(item => item.price >= minvalue && item.price <= maxvalue)
    // setItem(FillterPriceandProduct)
    dispatch({type:"product" , itemdata : FillterPriceandProduct})
    
    console.log(e.target.innerText);
    setCounter(true)
    if (target === 'All') {
      // setItem(itemPrice)
      setCounter(false)
      setValueRange([0, 1000])
    }
  }
  function Search(event) {
    const minvalue = valueRange[0]
    const maxvalue = valueRange[1]
    setEvent(event)
    // const SearchItem = item.filter((item) => item.category == event)
    const SearchItem = item.filter((user => user.category.includes(event)))
    let FillterPriceandProduct = SearchItem.filter(item => item.price >= minvalue && item.price <= maxvalue)
    console.log(FillterPriceandProduct);
    // let updateProduct = itemPrice
    // dispatch({type:"product" , itemdata : itemSearch})
    if(SearchItem){
      dispatch({type:"product" , itemdata : SearchItem})
    }
    if(event == null || event == undefined || event == '' || event == ' '){
      dispatch({type:"product" , itemdata : itemSearch})
    }

  }

  function AboutProductItem(item) {
    console.log(item);
    const _About = about.find((items => items.id === item.id))
    if (!_About) {
      setAbout([{ ...item }])
    }

  }





  // context and reducer
  const value = {Search, dispatch , state , AddCart, item , itemShoping, Plass, Min, FavouriteItem, favourite, valueRange, setValueRange, BottomFillter, AboutProductItem, about }

  return (
    <ContextCart.Provider value={value}>
      {children}
    </ContextCart.Provider>
  )
}
