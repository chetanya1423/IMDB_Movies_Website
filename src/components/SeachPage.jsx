import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { AppContext } from '../useContext/AppContext'
import { upcomming } from '../data'
import { SearchCard } from '../cards/SearchCard'
import { Card } from '../cards/Card'
import "../CSS/SearchPage.css"

export const SeachPage = () => {
  const { searchData, copySearchArr, functionValue, setFunctionValue, searchingData, dataHere, searchingArr, searchingLoader, setSearchingLoader } = useContext(AppContext)
  const [viewData, setViewData] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setViewData(true)
    }, 2000);

    return () => clearTimeout(timer);

  }, [])
  // console.log("searching page",copySearchArr)

  if (!searchingLoader) {
    console.log("Searching data printing", searchingData)
  }



  return (
    <div>
      <div className='w-full  flex items-center justify-center searchpage'>
        <div className='w-11/12 grid   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 mb-10 place-items-center items-center gap-y-10 justify-center text-center  un-searchpage'>
          {

            // searchingLoader ? (
            //   <div className='loader'></div>
            // ) : (

            //     searchingData.map((movie,index)=>(
            //       console.log("data aa gya h",movie,index)
            //      ))

            // )
            searchingLoader ? (
              <div className='loader'></div>
            ) : (
             searchingData.length === 0 ? (
              <div className='flex justify-center max-w-max  mx-auto items-center text-center text-grayWhite font-custom text-2xl'>
                No Result Found
              </div>
             )
             :
             (
              searchingData.map(function (movie, index) {
                return <SearchCard key={index} movie={movie} />
                //  console.log("Data aa gya h",movie)
                //  
              }
              )
             )



            )


          }


        </div>
      </div>
    </div>
  )
}


// searchingData.map((movie, index) => (
//   //  return console.log("data aa rha h",movie)
//   <SearchCard movie={movie} key={index}/>
// ))




