import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/movies">Movie List</Link>
            <Link to="/movies/form">Movie Form</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default NavBar