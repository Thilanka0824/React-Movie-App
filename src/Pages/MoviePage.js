import { useParams } from "react-router-dom"


//const log = console.log.bind(document)

const MoviePage = (props) => {
    const { movieList } = props
    const params = useParams()
    const titleParam = params.title
    return (
        <div>
            <p>
                {movieList.map((movie) => {
                    if (movie.Title === titleParam) {
                        return (
                            <div>
                                <h2>{movie.Title}</h2>
                                <p>{movie.Director}</p>
                                <p>{movie.Actors}</p>
                                <p>{movie.Plot}</p>
                            </div>
                        );
                    }
                })}
            </p>
        </div>
    );
};

export default MoviePage