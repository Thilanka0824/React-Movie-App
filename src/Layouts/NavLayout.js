import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"
import MovieSidebar from "../Components/MovieSidebar"

const NavLayout = () => {
    return (
        <div className="nav-layout">
            <NavBar />
            
            <Outlet />
            
        </div>
    )
}

export default NavLayout