import './App.css';
import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox'; 


const App = ()=>  {
  const [movies, setMovies] = useState([ ]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=cdd6b145`;

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
};

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox  searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
      <MovieList movies = {movies} />
      </div>
    </div>
    );
}

export default App;
