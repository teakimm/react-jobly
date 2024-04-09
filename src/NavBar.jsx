import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
                <NavLink to="/">Jobly</NavLink>
            </div>
            <div>
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
            </div>

        </nav>
    );
}

export default NavBar;