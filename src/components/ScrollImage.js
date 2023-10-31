import React, { useState,useEffect } from 'react'
import { ScrollImages } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "../CSS/ScrollImaage.css"



export const ScrollImage = () => {

    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [duration, setDuration] = useState(0)
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ScrollImages.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }, [ScrollImages.length, 6000]);
  
    const convertToHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return { hours, minutes };
    };
  
    const totalMinutes = ScrollImages[currentImageIndex].size;
    const { hours, minutes } = convertToHoursAndMinutes(totalMinutes);
  
  
    const myDiscription = ScrollImages[currentImageIndex].description
    
  

    return (

        <div className='w-11/12  flex lg:flex-row md:flex-row items-center justify-center lg:gap-8 md:gap-8 mt-8 sm:flex-col sm:gap-2 Scrolling'>
        {/* <div>
        <button className='border hover:opacity-40 ' onClick={()=>setCurrentImageIndex(currentImageIndex--)}>
          <FontAwesomeIcon icon={faArrowLeft} className='text-grayWhite p-3 w-[35px] h-[35px]'/>
          </button>
        </div> */}
        <div className=' lg:w-[720px] md:w-[500px] ScrollingImg'>
          <img className=' w-[100%] rounded-xl' src={ScrollImages[currentImageIndex].url} />
        </div>
        <div className=' lg:w-[400px] md:w-[30%] sm:w-[80%] Scrolling-con'>
          <div className='  text-center flex flex-col items-center lg:gap-5 md:gap-2 sm:gap-3 Scrolling-uncon'>
            <h1 className='text-grayWhite text-[28px]'> {ScrollImages[currentImageIndex].title}</h1>
            <p className='text-[12px] text-grayWhite font-custom'><span className='text-darkYellow font-custom font-bold'>Description :-</span> {ScrollImages[currentImageIndex].description.substring(0, 200) + "..."}</p>
            <p className='text-grayWhite text-[14px]'><span className='text-darkYellow font-custom font-bold'></span>  {hours} h : {minutes} m</p>
            <p className='text-grayWhite text-[14px]'><span className='text-darkYellow font-custom font-bold'>Rating :-</span> {ScrollImages[currentImageIndex].rating}</p>
            <button className='border border-darkYellow rounded-xl h-[40px] w-[150px] hover:opacity-40'>
              <a href={`${ScrollImages[currentImageIndex].trailer}`} className='text-grayWhite text-sm  gap-2 flex items-center justify-center'>
                <p>Watch Trailer</p> <FontAwesomeIcon icon={faPlay} className='text-darkYellow'/>
              </a>
            </button>
          </div>
          {/* <div>
          <button className='border hover:opacity-40 ' onClick={()=>setCurrentImageIndex(currentImageIndex++)}>
          <FontAwesomeIcon icon={faArrowRight} className='text-grayWhite p-3 w-[35px] h-[35px]'/>
          </button>
          </div> */}
        </div>
      </div>



    )
}
