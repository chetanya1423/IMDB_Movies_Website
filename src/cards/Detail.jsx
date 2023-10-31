import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import store from '../Redux/Slices/CardSlices'
import '../CSS/Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'

export const Detail = () => {
  const movie = useSelector((state) => state.value);
  const convertToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  };

  const totalMinutes = movie.movie_length;
  const { hours, minutes } = convertToHoursAndMinutes(totalMinutes);


  
  


  return (
    <div className='text-grayWhite w-full flex justify-center items-center mt-10 mb-10'>
      <div className='w-11/12  un-detail flex flex-col items-center justify-center'>

        <div className=' w-full flex items-center justify-center md:flex-row sm:flex-col un-main-detail mt-10 mb-10'>
          <div className='lg:w-[26%] lg:h-[425px] md:w-[28%] md:h-[375px] sm:w-[39%] sm:h-[373px] bg-contain bg-no-repeat detail-img ' style={{ backgroundImage: `url('${movie.banner}')` }}> </div>
          <div className='flex flex-col items-center justify-center mt-10'>
            <div className='   flex flex-col lg:gap-5 md:gap-3 sm:gap-6 p-3 max-h-max w-[73%] items-center justify-center heading-main '>
              <h1 className='text-grayWhite lg:text-3xl md:text-xl sm:text-3xl font-bold text-center title leading-10'>{movie.title}</h1>

              <div className='flex flex-col items-center justify-center gap-3  release-div'>
            

                  <div className='lg:text-md md:text-sm sm:text-lg sm:w-[126%] flex gap-3 release font-bold max-w-max '>
                  <p className='text-bold font-custom text-center text-darkYellow release-con'>Release Date :- </p>
                  <p className='text-grayWhite font-custom text-bold text-center release-date'>{movie.release}</p>
                  </div>

                  
             
                <div className='flex gap-2'>
                  {
                    movie.movie_length ? (<p className='font-bold font-custom text-center text-darkYellow lg:text-md md:text-sm sm:text-lg time'>Time :-</p>) : (<p></p>)
                  }
                  {
                    movie.movie_length ? (<p className='text-grayWhite font-custom font-bold text-mdlg:text-md md:text-sm sm:text-lg hour'>{hours}H {minutes}M</p>) : (<p></p>)
                  }
                </div>
              </div>
              <div className='max-w-max  '>
                <p className='font-custom font-bold leading-7 text-center  lg:text-md md:text-sm sm:text-lg  heading'><span className='text-darkYellow font-bold'>IMDB ID :-</span> {movie.imdb_id}</p>
              </div>
            </div>





            <div className='    sm:flex gap-10  items-center justify-end p-3 w-[100%] detail-rating'>
              <div className='max-w-max  '>
                {
                  movie.rating ? (
                    <div className='flex flex-col gap-4 h-full'>
                      <p className='text-darkYellow lg:text-md md:text-sm sm:text-lg heading text-center  font-bold'>
                        IMDB RATING
                      </p>
                      <div className='flex gap-3 items-center justify-center startag'>
                        <FontAwesomeIcon icon={faStar} className='text-darkYellow w-[30px] h-[30px]' />
                        <div className='flex gap-1 items-center '>
                          <p className='lg:text-[22px] md:text-[18px] sm:text-[22px] un-heading text-center font-bold text-darkYellow'>{movie.rating}</p>
                          <p className=' font-bold fix-heading text-center'>/10</p>
                        </div>
                      </div>
                    </div>
                  ) : (<div></div>)
                }
              </div>
              <div className=' max-w-max flex flex-col gap-4 items-center justify-center border-b'>
                <p className='text-darkYellow lg:text-md md:text-sm sm:text-lg heading w-[100px] text-center  font-bold'>YOUR RATING</p>
                <div className='flex gap-3 items-center justify-center'>
                  <FontAwesomeIcon icon={faStar} className='text-grayWhite w-[30px] h-[30px]' />
                  <p className='lg:text-[22px] md:text-[18px] sm:text-[22px] un-heading text-center  font-bold text-grayWhite'> Rate</p>
                </div>
              </div>
              <div className='border-b max-w-max flex flex-col gap-4 items-center justify-center '>
                {
                  movie.popularity ? (
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-darkYellow lg:text-md md:text-sm sm:text-lg heading text-center  font-bold'>
                        POPULARITY
                      </p>
                      <p className='lg:text-[22px] text-center md:text-[18px] sm:text-[22px] un-heading font-custom font-bold  text-grayWhite'>
                        {
                          movie.popularity
                        }
                      </p>
                    </div>) : (<div></div>)
                }
              </div>

            </div>
          </div>
          <div>

          </div>
        </div>










        {/* Description container */}
        <div className='w-[80%] flex flex-col items-center justify-center  gap-9 mt-14  main-contain'>


          <div className='flex flex-col items-center justify-center gap-3 un-main-contain'>
            <div className=' lg:w-[70%] md:w-[70%] sm:w-[80%] flex flex-col items-center justify-center border-b  '>
              <p className='text-darkYellow font-bold  text-2xl'>Description :-</p>
              <p className='font-custom  leading-8 text-center   text-md py-3'> {movie.description}</p>
            </div>
            <div className='lg:w-[70%] md:w-[70%] sm:w-[80%]  flex flex-col items-center justify-center border-b'>
              <p className='text-darkYellow font-bold text-2xl'>Plot:-</p>
              <p className='font-custom leading-8 text-center   text-md py-3'> {movie.plot}</p>
            </div>

          </div>
          <div className='max-w-max flex items-center justify-center  mb-10'>
            <button className='border border-darkYellow rounded-xl h-[50px] w-[150px] hover:opacity-40 flex items-center justify-center'>
              <a href={`${movie.trailer}`} className='text-grayWhite text-sm    gap-2 flex items-center justify-center '>
                <p className='text-darkYellow font-custom font-bold '>Watch Trailer</p> <FontAwesomeIcon icon={faPlay} className='text-darkYellow' />
              </a>
            </button>
          </div>

        </div>



      </div>

    </div>
  )
}
