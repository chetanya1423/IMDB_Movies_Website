import React from 'react'
import store from '../Redux/Slices/CardSlices'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../CSS/SearchCard.css'










export const SearchCard = ({movie,index}) => {





console.log("Search card h ye",movie)


    store.getState();
 

    const [beforeContent, setBeforeContent] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
      setBeforeContent("Releaing_on_" + 13)
    }, [])
  
  
  
  function addToCard(){
    store.dispatch({ type: movie });
    store.subscribe(() => {
      console.log('Store updated:', store.getState());
     });
  }
  


  return (
    <div
    key={index}
    className=" w-[200px]   rounded-xl    items-center
                     bg-contain bg-no-repeat  hover:transform hover:scale-[1.1] main-searchcard 
                     hover:z-0   duration-[0.5s] ease-in-out  shadow-2xl  z-5 " 
                     onClick={addToCard} >

  
  <Link to={`/detail`}>
<div className={`flex flex-col un-main-searchcard `} >
      <div className='w-[200px] h-[294px] bg-contain bg-no-repeat bg-center  multiImage' style={{ backgroundImage: `url('${movie.image_url}')` }}>

      </div>
      {/* <img className='lg:h-[280px] md:h-[100%] multiImage lg:w-[200px] md:w-[100%] sm:w-[100%]  
                   my-0 mx-auto object-cover object-center  ' src={movie.url} /> */}
      <div className='lg:w-[200px] md:w-[100%] sm:w-[100%] items-start flex flex-col space-y-2 p-2 gap-2 font-custom text-sm bg-shadowBlack un-main-con'>
        <p className='text-darkYellow'><FontAwesomeIcon icon={faStar} /> {movie.rating}</p>
        <div className=' h-[50px]    w-full flex text-left items-left justify-left'>
          <p className='text-grayWhite text-[18px] font-bold' >{
             movie.title.length >= 20 ? (movie.title.substring(0, 20) + " ...") : (movie.title)
          } </p>
        </div>
        <div className='w-full  flex items-center justify-center'>
          <button className='border border-darkYellow rounded-xl bg-buttonBg p-2'>
            <p className='text-md text-darkYellow'>Read More</p>
          </button>
        </div>
      </div>


    </div></Link>
  </div>

  )
}
