import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** Component for navigation bar
 *
 * State: None
 * Props: None
 *
 * App -> NavBar
 */
function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">

                <NavLink className="navbar-brand text-light" to="/">Jobly</NavLink>


                <div className="d-flex ms-auto">
                    <NavLink className="nav-link text-light mx-3" to="/companies">Companies</NavLink>
                    <NavLink className="nav-link text-light" to="/jobs">Jobs</NavLink>
                </div>

            </div>
        </nav>


    );
}

export default NavBar;