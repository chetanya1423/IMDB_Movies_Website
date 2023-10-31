import React, { useEffect } from 'react'
import logo from "../asset/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import "../CSS/MainBar.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SearchBtn } from '../data'
import { useContext } from 'react'
import { AppContext } from '../useContext/AppContext'
import axios from 'axios'




export const MainBar = () => {

  const {searchData,setSearchData,searchMovieDatabyId,functionValue,setSearchingLoader,setFunctionValue,searchingData,setSearchingData,searchingArr} = useContext(AppContext)
const navigate = useNavigate()
const param  = useParams()
    const [searchValue,setSearchValue] = useState("");
   
    let arr=[]
    let ab = []
  const fatchApi = async(title) =>{

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
      const data = response.data
      response.data.results.map( (data,index)=>{
fatchById(data.imdb_id)
      } )

      // const timer = setTimeout(() => {
      //   setSearchingLoader(false)
      //   setSearchingData(searchingArr)
      //   console.log("set data waala",searchingData)
      //  }, 3000);
   
      //  return () => clearTimeout(timer);
       



    } catch (error) {
      console.error(error);
    }

  }





  const fatchById = async (id) => {
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
      // console.log("console ke andar ka data",response.data.results);
  searchingArr.push(response.data.results)

// console.log("array waala",searchingArr)
      // console.log("api waala push",retriveSeriesArr)
    } catch (error) {
      console.error(error);
    }
  }



  const fatchSeriesByTitle = async(title)=>{

const options = {
  method: 'GET',
  url: `https://moviesminidatabase.p.rapidapi.com/series/idbyTitle/${title}/`,
  headers: {
    'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  response.data.results.map( (data,index)=>{
fatchSeriesById(data.imdb_id)
  } )

   
       

} catch (error) {
	console.error(error);
}
  }




const fatchSeriesById = async(id)=>{

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
  searchingArr.push(response.data.results)
} catch (error) {
	console.error(error);
}
}




const fatchSeriesByGenre = async(title)=>{

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
fatchSeriesById(data.imdb_id)
  } )


  const timer = setTimeout(() => {
    setSearchingLoader(false)
    setSearchingData(searchingArr)
    // console.log("set data waala",searchingData)
   }, 3000);

   return () => clearTimeout(timer);

} catch (error) {
	console.error(error);
}
}




const fatchMovieByGenre = async(title)=>{

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
fatchById(data.imdb_id)
  } )
} catch (error) {
	console.error(error);
}
}






















  
const capitalizeFirstLetter = (string) => {
  let upperCase = string.charAt(0).toUpperCase() + string.slice(1);
   console.log("my string",upperCase)
   
    setSearchingLoader(true)
    fatchApi(upperCase)
    fatchSeriesByTitle(upperCase)
    fatchMovieByGenre(upperCase)
    fatchSeriesByGenre(upperCase)
};
    

  useEffect( ()=>{
   if(functionValue !== 0){
    
    capitalizeFirstLetter(searchValue)



    // fatchApi();

   }
    },[functionValue])
        
// console.log(" Function value",functionValue)



function handleKeyPress(event){
if(event.key === 'Enter'){
  navigate(`/search/${searchValue}`)
  setSearchingLoader(true)
  capitalizeFirstLetter(searchValue)
}
}

    
  return (
    <div className='main   lg:w-11/12 sm:w-[80%]'>
        <div className='mainbar active flex justify-between lg:gap-36 md:gap-36 sm:gap-16 py-3 '>
           
            <div className=' lg:w-[400px] md:w-[400px] sm:w-[200px]'>
                <img src={logo} className='logo text-grayWhite  bg-grayWhite lg:w-[100px] md:[200px] sm:w-[200px] rounded-xl'/>
            </div>
            <div className='maininput  flex gap-7 items-center '>
              <input type='text' className='inputtag lg:w-[500px] md:w-[300px] sm:w-[70%] h-8 rounded-2xl font-custom text-black p-1' 
              placeholder='Search movies/Series' onChange={(e)=>setSearchValue(e.target.value)} onKeyPress={handleKeyPress}/>
              {
                searchValue !=='' ?(
                  <Link to={`/search/${searchValue}`}>
                    <FontAwesomeIcon icon={faSearch} className='text-grayWhite' onClick={()=>setFunctionValue(functionValue+1)}/>
                  </Link>
                ) : (
                  <FontAwesomeIcon icon={faSearch} className='text-grayWhite' onClick={()=>alert("Please enter the movie/series name")}/>
                )
              }
                
            </div>
        </div>
    </div>
  )
}
