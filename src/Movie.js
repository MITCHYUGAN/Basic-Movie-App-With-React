import { useEffect, useState } from "react"
import './App.css'
import searchIcon from "./search.svg"
import Movie from "./MovieCard"


const API_URL = "http://www.omdbapi.com?apikey=f5506cbf"

const App = () =>{

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
        console.log(response)
        console.log(data)
    }

    // useEffect(() => {
    //     searchMovies('superman')
    // }, [])

    window.onload = () => {
        searchMovies('superman')
    }


    return(
        <div className="app">
            <h1>MoviePlace</h1>

            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for movies" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img 
                    src={searchIcon} 
                    alt="Search" 
                    onClick={() => searchMovies(search)}
                />
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className="container">
                       {movies.map(movie => (
                            <Movie 
                                Year={movie.Year}
                                Title={movie.Title}
                                Type={movie.Type}
                                Poster={movie.Poster}
                                key={movie.imdbID}
                            />
                            
                       ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h1>No Movies Found</h1>
                    </div>
                )
            }

            

            
        </div>
    )
}

export default App 