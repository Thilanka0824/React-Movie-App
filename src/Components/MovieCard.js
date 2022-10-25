const MovieCard = (props) => {
    return (
        <div className="movie-list-card">
             
                <img className="movie-card-image1" src={props.movie.Images[0]} alt={props.movie.Images[1]} />
            <img className="movie-card-image2" src={props.movie.Images[2]} alt={props.movie.Images[3]} />
               
                
           
                <h2 className="movie-card-title-button">{props.movie.Title}</h2>
                <p>{props.movie.Director}</p>
                <p>{props.movie.Actors}</p>
            

        </div>
    )
}

export default MovieCard