import React, { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store, { add } from '../Redux/Slices/CardSlices';

export const Card = ({ index, movie }) => {
  store.getState();
 

  const [beforeContent, setBeforeContent] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    setBeforeContent("Releaing_on_" + 13)
  }, [])



function addToCard(){
  store.dispatch({ type: movie });
  store.subscribe(() => {
    // console.log('Store updated:', store.getState());
   });
}



  return (

    
    
    <div
      key={index}
      className="lg:min-w-[189px] md:min-w-[19%] sm:min-w-[26%]  max-h-full  rounded-xl card-main   items-center
                       bg-contain bg-no-repeat  hover:transform hover:scale-[1.1] 
                       hover:z-0   duration-[0.5s] ease-in-out  shadow-2xl block z-5 upcomming-card " 
                       onClick={addToCard} >
    
    <Link to='/detail'>
 <div className={`card-con `} >
        <div className='lg:w-[100%] lg:h-[246px] md:w-[100%] md:h-[202px] sm:w-[100%] sm:h-[225px] bg-center bg-contain bg-no-repeat upcomming-bg multiImage' style={{ backgroundImage: `url('${movie.primaryImage.url}')` }}>

        </div>
        {/* <img className='lg:h-[280px] md:h-[100%] multiImage lg:w-[200px] md:w-[100%] sm:w-[100%]  
                     my-0 mx-auto object-cover object-center  ' src={movie.url} /> */}
        <div className='lg:w-[100%] md:w-[137px] sm:w-[153px] items-start flex flex-col space-y-2 p-2 gap-2 font-custom text-sm bg-shadowBlack card-container'>
          <p className='text-darkYellow'><FontAwesomeIcon icon={faStar} /> {movie.rating}</p>
          <div className=' h-[50px]    w-full flex text-left items-left justify-left'>
            <p className='text-grayWhite text-[18px] font-bold' >{
              movie.titleText.text.length >= 20 ? (movie.titleText.text.substring(0, 20) + " ...") : (movie.titleText.text)
            } </p>
          </div>
          <div className='w-full  flex items-center justify-center'>
            <button className=' rounded-xl bg-buttonBg'>
              <p className='text-md text-normalBlue p-2'>Read More</p>
            </button>
          </div>
        </div>


      </div></Link>
    </div>














    // <div className="box 
    // min-w-[14%]  h-[310px]  items-center
    //                      z-5
    //                       shadow-2xl block  upcomming ">
    // 	<img src={movie.url}/>
    // </div>










  )
}
