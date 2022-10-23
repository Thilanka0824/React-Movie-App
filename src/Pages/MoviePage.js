import { useParams } from "react-router-dom"


//const log = console.log.bind(document)

const MoviePage = (props) => {

    const params = useParams()

    const foundMovie = props.movieList.find((movie) => {

        return movie.Title === params.title

    })

    if (foundMovie.Title === params.title) {
        return (
            <div>
                <h2>Title: {foundMovie.Title}</h2>
                <h2>Director: {foundMovie.Director}</h2>
                <h2>Actor: {foundMovie.Actors}</h2>
                <h2>Plot: {foundMovie.Plot}</h2>
                
            </div>
            
        )
    }

}

export default MoviePage