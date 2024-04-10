import { NavLink } from "react-router-dom";

/** Component for navigation bar
 *
 * State: None
 * Props: None
 *
 * App -> NavBar
 */
function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">

                <NavLink className="navbar-brand text-light" to="/">Jobly</NavLink>


                <div class="d-flex ms-auto">
                    <NavLink className="nav-link text-light mx-3" to="/companies">Companies</NavLink>
                    <NavLink className="nav-link text-light" to="/jobs">Jobs</NavLink>
                </div>

            </div>
        </nav>


    );
}

export default NavBar;