import React, { useContext, useState } from 'react'
import '../CSS/SeeAllContainer.css'
import { AppContext } from '../useContext/AppContext'
import { SearchCard } from '../cards/SearchCard'
import { UpCommingDetail } from '../cards/UpCommingDetail'
import {UpCommingMain} from '../cards/UpCommingMain'
import { useEffect } from 'react'





export const SeeAllContainer = () => {
  const { seeAllHandler, arr, upcommingMovie, upCommingMovieFatch, loading,upCommingLoader } = useContext(AppContext)
  const [showDiv,setShowDiv] = useState(false)
  const currentYear = new Date().getFullYear();
  let page = 1
  // useEffect(()=>{
  //   upCommingMovieFatch(page,currentYear)

  //   console.log("Popular movie",arr)
  //   arr.map( (data,index)=>{
  //     console.log("dssssas",data)
  //   } )
  // },[] )

  // console.log("upcomming movie page page",upcommingMovie)


  useEffect(() => {


    upCommingMovieFatch(page, currentYear)


    

      const timer = setTimeout(() => {
        setShowDiv(true);
      }, 3000);
  
      return () => clearTimeout(timer);
   

  }, [])




  return (
    <div>
      <div className='w-full  flex items-center justify-center searchpage '>
        <div className='w-11/12  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 mb-10 gap-y-10 justify-center text-center place-items-center un-searchpage'>


          {
            upCommingLoader ? (
              <div class="loader"></div>


            ) : (
               showDiv &&  upcommingMovie.results.map((movie, index) => (
               
                !movie.primaryImage ? (
                  console.log("image not found")
                ) :(
                  <UpCommingMain movie={movie} key={index} />
                )

                  // 
                
               ))
            )

          }

        </div>
      </div>
    </div>
  )
}


// upcommingMovie.map((movie, index) => (

// movie.primaryImage === null ? (

//   console.log("image not fond")

// ) : (
//   <UpCommingMain movie={movie} key={index} />
// )
// )
// )