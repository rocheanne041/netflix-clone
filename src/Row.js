import React, {useState, useEffect, useRef} from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const mounted = useRef(false);

    //A snippet of code which runs based on a specific condition
    useEffect(() => {
      //if [], run once when the row loads, and don't run again 
      async function fetchData(){
        const request = await axios.get(fetchUrl); //get the beginning url "https://api.themovie.org/3"
        if (mounted.current === null) return;
        console.log("Fetch response is available!");
        setMovies(request.data.results);
        return request;
        }
      fetchData();
    }, [fetchUrl]);
    // console.table(movies);

    return (      
    <div className = "row">
      <h2>{title}</h2>
      <div className="row_posters">
       {/* problem :React - Cannot read property 'map' of undefined */}
      {/* solution : i just added movies && before the movies.map */}
      {movies && movies.map((movie) => (
        <img key={movie.id} 
        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
        src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
        alt ={movie.name} />
      ))}
      </div>
</div>
    )
}

export default Row;


  {/* problem :React - Cannot read property 'map' of undefined */}
      {/* solution : i just added movies && before the movies.map */}