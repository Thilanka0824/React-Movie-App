import { Link } from "react-router-dom";

const MovieSidebar = (props) => {
  return (
    <div className="movie-sidebar">
      <h2>Movie Sidebar</h2>
      {props.movieList.map((movieItem, index) => {
        return (
          <Link
            className="movie-sidebar-links"
            key={index}
            to={`/movies/${movieItem.Title}`}
          >
            {movieItem.Title}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieSidebar;
