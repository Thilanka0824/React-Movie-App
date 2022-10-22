
import MovieCard from "../Components/MovieCard"

const MovieListPage = (props) => {
    return (
        <div>
            <h1>Movie List Page</h1>
            <div className="movie-list">
                {props.movieList.map((movie)=>{
                    return <MovieCard movie={movie}/>
                })}
            </div>
        </div>
    )
}

export default MovieListPage