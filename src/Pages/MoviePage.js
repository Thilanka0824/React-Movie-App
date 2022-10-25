import { useParams } from "react-router-dom"


//const log = console.log.bind(document)

const MoviePage = (props) => {

    const params = useParams()
    const paramTitle = params.title
    const foundMovie = props.movieList.find((movie) => {

        return movie.Title === paramTitle

    })

    if (foundMovie.Title === paramTitle) {
        return (
            <div>
                <h2>{foundMovie.Title}</h2>
                <img className="movie-page-image" src={foundMovie.Images[0]} alt="" />
                <p>Director: {foundMovie.Director}</p>
                <button onClick={(e)=>{
                    console.log("hi")
                }}>Price: ${foundMovie.Price}</button>
                <p>Actors: {foundMovie.Actors}</p>
                <p>Plot: {foundMovie.Plot}</p>
                <p>Coming Soon: {foundMovie.ComingSoon}</p>
                <p>Year: {foundMovie.Year}</p>
                <p>Rated: {foundMovie.Rated}</p>
                <p>Released: {foundMovie.Released}</p>
                <p>Runtime: {foundMovie.Runtime}</p>
                <p>Genre: {foundMovie.Genre}</p>
                <p>Writer: {foundMovie.Writer}</p>
                <p>Language: {foundMovie.Language}</p>
                <p>Country: {foundMovie.Country}</p>
                <p>Awards: {foundMovie.Awards}</p>
                <p>imdb Rating: {foundMovie.imdbRating}</p>
                <p>Type: {foundMovie.Type}</p>
              
                

                
            </div>
            
        )
    }

}

export default MoviePage

/*
const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [actors, setActors] = useState('')
    const [plot, setPlot] = useState('')
    const [comingSoon, setComingSoon] = useState('')
    const [year, setYear] = useState('')
    const [rated, setRated] = useState('')
    const [released, setReleased] = useState('')
    const [runtime, setRuntime] = useState('')
    const [genre, setGenre] = useState('')
    const [writer, setWriter] = useState('')
    const [language, setLanguage] = useState('')
    const [country, setCountry] = useState('')
    const [awards, setAwards] = useState('')
    const [imdbRating, setRating] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState([])
*/