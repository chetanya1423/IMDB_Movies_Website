import React, { useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons';
import {RxCross2} from 'react-icons/rx'



import "../CSS/Navbar.css"
import { AppContext } from '../useContext/AppContext';


export const Navbar = () => {
    const {catagory,setCatagory} = useContext(AppContext)
    const [active,setActive] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
           
          setActive(true)
  
        }
        window.addEventListener('scroll', handleScroll);
  
     }, [])

   
  return (
    <div className='Navbar 0 flex flex-row lg:w-11/12 md:w-[85%] lg:gap-32 md:gap-16 sm:gap-2   items-center  justify-between'>
      

    <div className={`un-Navbar flex lg:gap-16 bg-releaseBlack z-10 md:gap-8 lg:max-w-max  mx-auto ${active ? "active" : "close"}`}>
        <div className='lg:hidden md:hidden sm:hidden'>
        {
    active ? (
        <FontAwesomeIcon icon={faBars}  className='menuIcon text-grayWhite ' onClick={()=>setActive(false)}/>
    ) : (<RxCross2 onClick={()=>setActive(true)}  className='menuIcon text-grayWhite '/>)
}
        </div>
    <div className='text-bold p-4'>
            <Link to="/" >
            <p className='font-custom text-grayWhite'> Home </p>
            </Link>
        </div>
        <div className='w-max p-4'>
            <Link to="/trending"  > 
            <p className='font-custom text-grayWhite'> Trending</p>
            </Link>
        </div>
        <div className='w-max p-4'>
            <Link to="/movies" >
            <p className='font-custom text-grayWhite'>Movies  </p>
            </Link>
        </div>
        <div className='w-max p-4'>
            <Link to="/webseries"> 
            <p className='font-custom text-grayWhite'>Web Series </p>
            </Link>
        </div>
        <div className='w-max p-4'>
            <Link to="/upcommingMovie">
            <p className='font-custom text-grayWhite'> Upcomming Movie </p>
            </Link>
        </div>
    </div>

</div>

  
  )
}
