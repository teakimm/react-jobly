import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** Component for navigation bar
 *
 * State: None
 * Props: logout -> method to call when user clicks logout
 *
 * App -> NavBar
 */
function NavBar({ logout }) {
    const { currUser } = useContext(userContext);

    function handleLogout() {
        logout();
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">

                <NavLink className="navbar-brand text-light" to="/">Jobly</NavLink>

                {currUser
                    ? <div className="d-flex ms-auto">
                        <NavLink className="nav-link text-light mx-3" to="/companies">Companies</NavLink>
                        <NavLink className="nav-link text-light mx-3" to="/jobs">Jobs</NavLink>
                        <NavLink onClick={handleLogout} className="nav-link text-light mx-3" to="/">Log Out</NavLink>
                    </div>
                    : <div className="d-flex ms-auto">
                        <NavLink className="nav-link text-light mx-3" to="/register">Register</NavLink>
                        <NavLink className="nav-link text-light mx-3" to="/login">Log In</NavLink>
                    </div>
                }


            </div>
        </nav>


    );
}

export default NavBar;