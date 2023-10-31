import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { MainBar } from './components/MainBar';
import { Detail } from './cards/Detail';
import { SeachPage } from './components/SeachPage';
import { SeeAllContainer } from './components/SeeAllContainer';
import { UpCommingDetail } from './cards/UpCommingDetail';
import { PopularPara } from './components/PopularMovies/PopularPara';




function App() {
  return (
    <div className="App ">
      <div className='bg-releaseBlack200 flex items-center justify-center '>
        <MainBar/>
      </div>
     
      <div>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       {/* <Route path='/detail/:id&title-:title' element={<Detail/>}></Route> */}
       <Route path='/detail' element={<Detail/>}></Route>
       <Route path='/search/:title' element={<SeachPage/>}></Route>
       <Route path='/upcommingMovie' element={<SeeAllContainer/>}></Route>
       <Route path='/upCommingMovieDetail/:title' element={<UpCommingDetail/>}></Route>
       <Route path='/popularMovie' element={<PopularPara/>}></Route>
       <Route path='/popularSeries' element={<PopularPara/>}></Route>
       <Route path='/trending' element={<PopularPara/>}></Route>
       <Route path='/movies' element={<PopularPara/>}></Route>
       <Route path='/webseries' element={<PopularPara/>}></Route>
       <Route path='/comedy' element={<PopularPara/>}></Route>
       <Route path='/animation' element={<PopularPara/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
