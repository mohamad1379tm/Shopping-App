import { Slider } from '@mui/material'
import React, { useContext, useState } from 'react'
import { HighlightOff , Dehaze , ArrowForward} from '@mui/icons-material/';
import './Fillter.css'
import { ContextCart } from '../Context/Context';


export default function Fillter() {
    const {valueRange , setValueRange , BottomFillter} = useContext(ContextCart)
  return (
    <div className='h-100'>
        <FillterDeskTop valueRange={valueRange} setValueRange={setValueRange} BottomFillter={BottomFillter}/>
        <MobileFillter valueRange={valueRange} setValueRange={setValueRange} BottomFillter={BottomFillter}/>
    </div>
  ) 
}



function FillterDeskTop({setValueRange,valueRange , BottomFillter}){
    return(
        <div className='DeskTop d-none h-100 col-md-12 d-md-block text-white rounded-4'>
            <div className='w-100'>

                <Filter BottomFillter={BottomFillter}/>

                <SliderFillter valueRange={valueRange} setValueRange={setValueRange}/>


            </div>
        </div>
    )
}


function MobileFillter({valueRange,setValueRange , BottomFillter}){

    const [clas , setClas] = useState(false)


    function remove(){
        
        let _Mobile = document.getElementsByClassName('Mobile')[0]
        if(clas == false){
            _Mobile.classList.add('Show')
            _Mobile.classList.remove('remove')
            setClas(true)
        }else{
            if(clas == true){
               
                _Mobile.classList.add('remove')
                _Mobile.classList.remove('Show')
                setTimeout(() => {
                    _Mobile.classList.remove('remove')
                    _Mobile.classList.add('removeTop')
                }, 800);
                setClas(false)
            }
        }
        console.log(clas);
    }

    return(
        <>
            <div className="d-flex d-md-none align-items-center justify-content-end Menu">
                <IconShowFillter remove={remove}/>
            </div>

            <div className='position-absolute w-100 d-md-none top-0 h-100 Mobile text-white removeTop'>
                <IconFillter remove={remove}/>
                
                <Filter BottomFillter={BottomFillter}/>

                <SliderFillter valueRange={valueRange} setValueRange={setValueRange}/>
            </div>
        </>

    )
}



function IconShowFillter({remove}){
    return(
        <div className="col-2 h-100 d-flex d-md-none align-items-center justify-content-end fs-4">
            Fillter<ArrowForward/><span onClick={remove} className='d-flex'><Dehaze/></span>
        </div>
    )
}




function IconFillter({remove}){
    return(
        <div onClick={remove} className='iconremoe'><HighlightOff className='iconFillter'/></div>
    )
}



function Filter({BottomFillter}){
    return(
        <>
            <div className='Fillter'>
                <h1 className='text-center pt-5'>Fillter</h1>
            </div>

            <div className="Fillter-Products">
                <ul className='list-unstyled text-decoration-none w-100 d-flex justify-content-center align-items-center flex-column flex-md-row'>
                    <li onClick={(e)=>BottomFillter(e)} className='Li'>All</li>
                    <li onClick={(e)=>BottomFillter(e)} className='Li'>women's clothing</li>
                    <li onClick={(e)=>BottomFillter(e)} className='Li'>electronics</li>
                    <li onClick={(e)=>BottomFillter(e)} className='Li'>jewelery</li>
                    <li onClick={(e)=>BottomFillter(e)} className='Li'>men's clothing</li>
                </ul>
            </div>

        </>
    )
}



function SliderFillter({valueRange , setValueRange}){
    return(
        <div className="Fillter-Price d-flex justify-content-center">
        <Slider
            onChange={(e)=>setValueRange(e.target.value)}
            value={valueRange}
            valueLabelDisplay='on'
            min={0}
            max={1000}
        />
        </div>
    )
}
