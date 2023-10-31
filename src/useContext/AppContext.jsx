import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios';


export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [functionValue, setFunctionValue] = useState(0);
  const [seriesLoader, setSeriesLoader] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [upcommingMovie, setUpcommingMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const [seeAllHandler, setSeeAllHandler] = useState([])
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [dataHere, setDataHere] = useState(0);
  let [moviesId, setMovieId] = useState([])
  const [movieDetailsById, setMovieDetailsById] = useState([]);
  const [seriesDetailsById, setSeriesDetailsById] = useState([]);
  let [searchingData, setSearchingData] = useState([])
  const [catagory, setCatagory] = useState('home')
  const [searchingLoader,setSearchingLoader] = useState(true)
  const [upCommingLoader,setUpCommingLoader] = useState(true);
  const [genreComedyData,setGenreComedyData] = useState([])
  const [genreComedyLoading,setGenreComedyLoading] = useState(true)
  const [genreAnimationData,setGenreAnimationData] = useState([])
  const [genreAnimationLoading,setGenreAnimationLoading] = useState(true)
  
  let arr = []
  let retriveArr = []
  let retriveSeriesArr = []
  let searchingArr = []
  let copySearchArr = []
  let genreComedyArr =[]
  let genreAnimationArr =[]










  const searchMovieDatabyId = async (title) => {

    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${title}/`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      response.data.results.map((dataId, index) => {
        retriveDataBySearching(dataId.imdb_id,index)
    //     if (index === response.data.results.length-1 ) {
          
    //       setSearchingData(searchingArr)
    //       setSearchingLoader(false)
    // console.log("Movie detail store", searchingData)
          
    //     }
      })
      setSearchingData(searchingArr)
             setSearchingLoader(false)
      //  console.log("Movie detail store", searchingData)
      setFunctionValue(2)
    } catch (error) {
      console.error(error);
    }
  }





  const retriveDataBySearching = async (id,index) => {
    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {
      // console.log("etrive data", id)
      const response = await axios.request(options);
      // console.log(response.data.results);
      searchingArr[index] = response.data.results 


      // console.log("api waala push",retriveSeriesArr)
    } catch (error) {
      console.error(error);
    }
  }















  const upCommingMovieFatch = async (currentPage = 1, currentYear) => {



    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      params: {
        year: currentYear,
        limit: '50',
        page: currentPage
      },
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    try {
      // console.log("Api ke andar aa gye h")
      const response = await axios.request(options);
      setUpcommingMovie(response.data)
      setUpCommingLoader(false)
      // console.log("upcomming api", response.data.results);

    } catch (error) {
      console.error(error);
    }
  }






  const popularMovieFatch = async (page = 1) => {

    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/?page=${page}`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {

      const response = await axios.request(options);
      setPopularMovieData(response.data)

     
      //  console.log("api data", response.data);
      response.data.results.map((data, index) => {

        retriveMovieById(data.imdb_id)
       
      })

      const timer = setTimeout(() => {
        setLoading(false)
        setMovieDetailsById(retriveArr)
        // console.log("Movie detail store", movieDetailsById)
       }, 3000);
    
       return () => clearTimeout(timer);

      setDataHere(1)

    } catch (error) {
      console.error(error);
    }




  }





  const popularSeriesFatch = async (page) => {
    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/?page=${page}`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {

      const response = await axios.request(options);
      // setPopularMovieData(response.data)

      setSeriesLoader(false)
      // console.log("api data aa rha h", response.data);
      response.data.results.map((data, index) => {

        retriveSeriesById(data.imdb_id)
        // console.log(data.imdb_id)
        if (index === 48) {
          setSeriesDetailsById(retriveSeriesArr)
          // console.log("Movie detail store", seriesDetailsById)
        }
      })
      setDataHere(1)

    } catch (error) {
      console.error(error);
    }

  }







  const retriveMovieById = async (id) => {

    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {
      // console.log("etrive data", id)
      const response = await axios.request(options);
      // console.log(response.data);
      retriveArr.push(response.data.results)
      // console.log("api waala push",retriveSeriesArr)
    } catch (error) {
      console.error(error);
    }
  }






  const retriveSeriesById = async (id) => {

    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/series/id/${id}/`,
      headers: {
        'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      retriveSeriesArr.push(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }






  const retriveComedyBygenre = async(title)=>{

const options = {
  method: 'GET',
  url: `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${title}/`,
  headers: {
    'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  response.data.results.map( (data,index)=>{
    retriveGenreById(data.imdb_id)
  } )


  const timer = setTimeout(() => {
    setGenreComedyLoading(false)
    setGenreComedyData(genreComedyArr)
    // console.log("set data waala",genreComedyData)
   }, 3000);

   return () => clearTimeout(timer);
} catch (error) {
	console.error(error);
}
  }







  const retriveGenreById = async(id)=>{

const options = {
  method: 'GET',
  url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`,
  headers: {
    'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
 genreComedyArr.push(response.data.results)
} catch (error) {
	console.error(error);
}
  }





  const retriveSeriesByGenreTitle = async(title)=>{

const options = {
  method: 'GET',
  url: `https://moviesminidatabase.p.rapidapi.com/series/byGen/${title}/`,
  headers: {
    'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  response.data.results.map( (data,index)=>{
    retriveSeriesGenreById(data.imdb_id)
  } )
  const timer = setTimeout(() => {
    setGenreAnimationLoading(false)
    setGenreAnimationData(genreAnimationArr)
    // console.log("set data waala",genreAnimationData)
   }, 3000);

   return () => clearTimeout(timer);

} catch (error) {
	console.error(error);
}
  }


  const retriveSeriesGenreById = async(id)=>{

const options = {
  method: 'GET',
  url: `https://moviesminidatabase.p.rapidapi.com/series/id/${id}/`,
  headers: {
    'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  genreAnimationArr.push(response.data.results)
} catch (error) {
	console.error(error);
}
  }






  const value = {
    searchData,
    setSearchData,
    upcommingMovie,
    setUpcommingMovie,
    upCommingMovieFatch,
    loading,
    setLoading,
    seeAllHandler,
    setSeeAllHandler,
    popularMovieFatch,
    popularMovieData,
    setPopularMovieData,
    setDataHere,
    dataHere,
    arr,
    retriveMovieById,
    movieDetailsById,
    seriesDetailsById,
    popularSeriesFatch,
    seriesLoader,
    catagory,
    setCatagory,
    searchMovieDatabyId,
    setSearchingData,
    searchingData,
    copySearchArr,
    functionValue,
    setFunctionValue,
    searchingArr,
    searchingLoader,
    setSearchingLoader,
    upCommingLoader,
    retriveComedyBygenre,
    retriveSeriesByGenreTitle,
    genreComedyData,
    genreAnimationData,
    genreComedyLoading,
genreAnimationLoading
  
  }



  return <AppContext.Provider value={value}>{children}</AppContext.Provider>


}
