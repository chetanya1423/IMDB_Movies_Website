import React, { useContext, useEffect, useState } from 'react'
import { ScrollImage } from './ScrollImage'
import { UpcommingMovie } from './MainContainer'
import { upcomming } from '../data'
import { MainContainer } from './MainContainer'
import { popularMovies } from '../data'
import '../CSS/Home.css'
import { Navbar } from './Navbar'
import { AppContext } from '../useContext/AppContext'
import { SecondMainContainer } from './SecondMainContainer'



export const Home = () => {

  
  const [movieData,setMovieData] = useState(false)

  const { upCommingMovieFatch, upcommingMovie, loading, popularMovieFatch, popularMovieData, setPopularMovieData,setDataHere, dataHere, imbdId, setImbdId, movieDetailsById,
    seriesDetailsById,popularSeriesFatch,arr,seriesLoader,retriveComedyBygenre,retriveSeriesByGenreTitle,genreComedyData,
    genreAnimationData,
    genreComedyLoading,
genreAnimationLoading } = useContext(AppContext)
  let page=1
  let moviePage = 1
  let seiresPage = 1
  useEffect(() => {
  


     popularMovieFatch(moviePage)
     popularSeriesFatch(seiresPage)
     retriveComedyBygenre('Comedy')
     retriveSeriesByGenreTitle('Animation')


if(movieDetailsById[0]){
  
}

  }, [dataHere])



 







  return (
    <div className='flex flex-col'>
      <div className='flex items-center my-auto mx-auto justify-center'>

        <Navbar />
      </div>

      <div className='flex items-center justify-center mb-12  '>
    {
      loading ? (
        <div className='loader'></div>
      ) : (
       
        <ScrollImage />
     
      )
    }
     </div>


      {/* <div className='lg:h-[540px] md:h-[500px] sm:h-[500px]  home-movie flex justify-center items-center'>
               
       {
        loading ? (
          <div class="loader"></div> 
          
         
        ) : (
         
          <MainContainer text={'Upcommimg Movies'} seeAll={'See All'} upcommingMovie={upcommingMovie} paraname={'upcommingMovie'} />
        )
       }







      </div> */}



      <div className='lg:h-[540px] md:h-[500px] sm:h-[500px] flex flex-col justify-center items-center  home-movie'>
        {
          loading ? (
            <div className="loader"></div>
          ) :
            (
              //  console.log("Main container ke andar console",popularMovieData.results)
               <SecondMainContainer text={'Popular Movies'} seeAll={'See All'} upcomming={movieDetailsById} paraname={'popularMovie'} />
            )

        }
      </div>
      <div className='w-full flex  items-center justify-center'>
        {
          seriesLoader ? (
<div></div>
          ) :(
            <h1 className='text-4xl py-3 text-darkYellow font-custom font-bold w-11/12 '>
        Explore streaming
        </h1>
          )
        }
      </div>








      <div className='lg:h-[540px] md:h-[500px] sm:h-[500px] flex flex-col justify-center items-center home-movie'>
        {
       seriesLoader ? (
        <div className='loader'></div>
       ) :
       (
        <SecondMainContainer text={'Popular Series'} seeAll={'See All'} upcomming={seriesDetailsById} paraname={'popularSeries'}/>
       )
        }

      </div>



      <div className='lg:h-[540px] md:h-[500px] sm:h-[500px] flex flex-col justify-center items-center home-movie'>
        {
       genreComedyLoading ? (
        <div className='loader'></div>
       ) :
       (
        <SecondMainContainer text={'Comedy'} seeAll={'See All'} upcomming={genreComedyData} paraname={'comedy'}/>
       )
        }

      </div>


      <div className='lg:h-[540px] md:h-[500px] sm:h-[500px] flex flex-col justify-center items-center home-movie'>
        {
       genreAnimationLoading ? (
        <div className='loader'></div>
       ) :
       (
        <SecondMainContainer text={'Animation'} seeAll={'See All'} upcomming={genreAnimationData} paraname={'animation'}/>
       )
        }

      </div>



    </div>
  )
}
