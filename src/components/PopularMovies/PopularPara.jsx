import React, { useContext, useState,useEffect } from 'react'
import '../../CSS/PopularPara.css'
import { AppContext } from '../../useContext/AppContext'
import { PopularMain } from './PopularMain'
import { useLocation, useParams } from 'react-router-dom'
import { Navbar } from '../Navbar'






export const PopularPara = () => {
 const location = useLocation()
    const {seeAllHandler,dataHere,catagory,movieDetailsById,popularMovieFatch,setSeeAllHandler,popularSeriesFatch,seriesDetailsById} = useContext(AppContext)
    const [viewData,setViewData] = useState(false)

    useEffect(() => {





if(location.pathname==='/trending'){
  popularMovieFatch(2)
  setSeeAllHandler(movieDetailsById)
}
else if(location.pathname==='/movies'){
  popularMovieFatch(1)
  setSeeAllHandler(movieDetailsById)
}
else if(location.pathname==='/webseries'){
  popularSeriesFatch(2)
  setSeeAllHandler(seriesDetailsById)
}
        const timer = setTimeout(() => {
          setViewData(true);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [dataHere]); 
    









  return (
    <div>
     
    <div className='w-full  flex items-center justify-center searchpage '>
    <div className='w-11/12  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 mb-10 gap-y-10 justify-center text-center place-items-center un-searchpage'>
     
    {
                       seeAllHandler.length > 0 ?(
                        viewData && seeAllHandler.map((movie, index) => (
                          <PopularMain  movie={movie} key={index}/>
                                                          ) )
                       ) :(<div className='loader'></div>)
                    }
     
     
  
     
      {/* {
        upcomming.map((movie, index) => (
          <SearchCard movie={movie} index={index}/>
        ))
      } */}
    </div>
  </div>
</div>
      )
    }