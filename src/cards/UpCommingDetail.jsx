import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import store from '../Redux/Slices/CardSlices'
import '../CSS/UpCommingDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'



export const UpCommingDetail = () => {

    const movie = useSelector((state) => state.value);

    console.log("upCommingdetail container",movie)
      const convertToHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
      };
    
      const totalMinutes = movie.size;
      const { hours, minutes } = convertToHoursAndMinutes(totalMinutes);
    
    
     
    
      return (
        <div className='text-grayWhite w-full flex justify-center items-center mt-10 mb-10'>
          <div className='w-11/12  un-detail flex flex-col items-center justify-center'>
    
            <div className=' w-full flex items-center justify-center md:flex-row sm:flex-col un-main-detail mt-10 mb-10'>
              <div className='lg:w-[26%] lg:h-[425px] md:w-[28%] md:h-[375px] sm:w-[39%] sm:h-[373px] bg-contain bg-no-repeat detail-img bg-center' style={{ backgroundImage: `url('${movie.primaryImage.url}')` }}> </div>
              <div className='flex flex-col items-center justify-center mt-10'>
                <div className='   flex flex-col lg:gap-5 md:gap-3 sm:gap-6 p-3 max-h-max w-[73%] items-center justify-center heading-main '>
                  <h1 className='text-grayWhite lg:text-3xl md:text-xl sm:text-3xl font-bold text-center title leading-10'>{movie.originalTitleText.text}</h1>
    
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <p className='lg:text-md md:text-sm sm:text-lg flex gap-3 release font-bold max-w-max heading'><p className='text-bold font-custom text-center text-darkYellow md:w-[110px] sm:w-[140px]'>Release Date :- </p> <span>{movie.releaseDate.day}</span>    <span>{movie.releaseDate.month} </span>    <span>{movie.releaseDate.year}</span></p>
                
                  </div>
                  <div className='max-w-max  '>
                    <p className='font-custom font-bold leading-7 text-center  lg:text-md md:text-sm sm:text-lg heading w-[200px] border '><span className='text-darkYellow font-bold'>IMBD ID :-</span> {movie.id}</p>
                  </div>
                </div>
                <div className='    flex gap-8 flex-col items-center justify-end p-3 w-[73%]'>
                 
                 
                 
    
                </div>
              </div>
              <div>
    
              </div>
            </div>
    
    
    
    
    
    
    
    
    
    
            {/* Description container */}
            {/* <div className='w-[80%] flex flex-col items-center justify-center  gap-9 mt-14  main-contain'>
    
    
              <div className='flex flex-col items-center justify-center gap-3 un-main-contain'>
                <div className=' lg:w-[70%] md:w-[70%] sm:w-[80%] flex flex-col items-center justify-center border-b  '>
                  <p className='text-darkYellow font-bold  text-2xl'>Description :-</p>
                  <p className='font-custom  leading-8 text-center   text-md py-3'> {movie.description}</p>
                </div>
                <div className='lg:w-[70%] md:w-[70%] sm:w-[80%]  flex flex-col items-center justify-center border-b'>
                  <p className='text-darkYellow font-bold text-2xl'>Plot:-</p>
                  <p className='font-custom leading-8 text-center   text-md py-3'> {movie.description}</p>
                </div>
    
              </div>
              <div className='max-w-max flex items-center justify-center  mb-10'>
                <button className='border border-darkYellow rounded-xl h-[50px] w-[150px] hover:opacity-40 flex items-center justify-center'>
                  <a href={`${movie.trailer}`} className='text-grayWhite text-sm    gap-2 flex items-center justify-center '>
                    <p className='text-darkYellow font-custom font-bold '>Watch Trailer</p> <FontAwesomeIcon icon={faPlay} className='text-darkYellow' />
                  </a>
                </button>
              </div>
    
            </div> */}
    
    
    
          </div>
    
        </div>
      )
    }
    
