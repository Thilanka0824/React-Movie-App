import MovieCard from "../Components/MovieCard";

const MovieListPage = (props) => {
  return (
    <div>
      <div className="movie-list">
        {props.movieList.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieListPage;
