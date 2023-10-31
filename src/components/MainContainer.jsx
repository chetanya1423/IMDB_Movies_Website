import React, { useContext } from 'react'
import { Card } from '../cards/Card'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../CSS/MainContainer.css"
import { AppContext } from '../useContext/AppContext';


export const MainContainer = (Props) => {
    const { seeAllHandler, setSeeAllHandler } = useContext(AppContext)
    const text = Props.text;
    const seeAll = Props.seeAll;
    const upcommingMovie = Props.upcommingMovie
    const paraname = Props.paraname

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
                            <h1 className='font-custom text-grayWhite flex items-end text-xl  w-max gap-2 upcommingH1' onClick={() => setSeeAllHandler(upcommingMovie)}>{seeAll}
                                <span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className=' mt-10  lg:w-[95%] md:w-[95%] sm:w-[95%] absolute left-6 flex items-center overflow-x-auto upcomming gap-6 sm:gap-3 p-3  upcommingmovie'>
                    {
                        upcommingMovie.results.map((movie, index) => (

                            movie.primaryImage === null ? (

                                console.log("image not fond")

                            ) : (
console.log("Cark ke andar upcomming dat")
                                // <Card key={index} movie={movie} />
                            )

                            // 

                        ))
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
