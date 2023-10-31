
import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../cards/Card'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/PopularMovieCss/SecondMainContainer.css'
import {AppContext } from '../useContext/AppContext';
import { SecondCard } from '../cards/SecondCard';
import { upcomming } from '../data';


export const SecondMainContainer = (Props) => {
    const upcomming = Props.upcomming
    let midbArr = []
    const { seeAllHandler, setSeeAllHandler, imbdId, setImbdId, dataHere,arr,retriveArr,movieDetailsById } = useContext(AppContext)
    const [showDiv,setShowDiv] = useState(false)
    const text = Props.text;
    const seeAll = Props.seeAll;
    
    const paraname = Props.paraname
    
// console.log(arr)
//     useEffect( ()=>{
// arr.map( (id,index)=>{
// console.log("Id is here",id)
// } )
//     },[dataHere] )


useEffect(() => {

    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dataHere]); 




    return (
        <div className='h-[400px] sm:h-[500px]  my-10 overflow-hidden w-full flex flex-col absolute upcomming-main'>



            <div className='w-[100%] flex flex-col  items-center   upcommingMap '>
                <div className='mb-6 flex gap-5 justify-between w-11/12  max-h-max  upcomming-head'>
                    <div className='  '>
                        <h1 className='font-custom text-grayWhite flex items-start text-xl  w-max gap-4 upcommingH1'> {text}
                        </h1>
                    </div>
                    <Link to={`/${paraname}`} className=' '>
                        <div className='  '>
                            <h1 className='font-custom text-grayWhite flex items-end text-xl z-0  w-max gap-2 upcommingH1' onClick={() => setSeeAllHandler(upcomming)}>{seeAll}
                                <span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className=' mt-10  lg:w-[95%] md:w-[95%] sm:w-[95%] absolute left-6 flex items-center overflow-x-auto  gap-6 sm:gap-3 p-3 second-main-con '>
                    {
                       showDiv && upcomming.map((movie, index) => (
                            // console.log("card ke liye",movie)
                                <SecondCard movie={movie} key={index}  />
                            ) )
                       
                    }
                </div>
            </div>


        </div>










        // <div className='w-full absolute'>
        //     <div className='flex flex-col left-0 relative items-center justify-center gap-8'>
        //         <div className='flex lg:w-11/12 justify-between'>
        //             <div>
        //                 <h1 className='text-grayWhite font-custom'>
        //                     Upcomming Movies
        //                 </h1>
        //             </div>
        //             <div>
        //                 <Link to="">
        //                     <h1 className='text-grayWhite font-custom flex gap-2 items-center'>
        //                         See all
        //                         <FontAwesomeIcon icon={faArrowRight} />
        //                     </h1>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className='flex relative left-0 gap-5 w-[95%]  upcomming border h-[100%] items-center justify-center '>
        //             {
        //                 upcomming.map((movie, index) => (
        //                     <Card key={index} movie={movie} />
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>









    )
}
