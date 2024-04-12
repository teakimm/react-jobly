import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import { Collapse } from "bootstrap";

/** Component for navigation bar
 *
 * State: None
 * Props: logout -> method to call when user clicks logout
 *
 * App -> NavBar
 */
function NavBar({ logout }) {
    const { currUser } = useContext(UserContext);

    function handleLogout() {
        logout();
    }
    return (
        <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "#2c1a4d" }}>
            <div className="container-fluid ">
                <NavLink className="navbar-brand text-light" to="/">Jobly</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list" style={{ color: "white", fontSize: "2rem" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-0 gap-lg-3">
                        {currUser
                            ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/companies">Companies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/jobs">Jobs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={handleLogout} className="btn btn-outline-light" to="/">Log Out</NavLink>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/register">Register</NavLink>                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/login">Log In</NavLink>                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );

    // return (

    //     <nav classNameName="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#2c1a4d" }}>
    //         <div classNameName="container-fluid">

    //
    //             <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span classNameName="navbar-toggler-icon bg-black"></span>
    //             </button>

    //             {currUser
    //                 ? <div classNameName="navbar-collapse align-items-center ms-auto">
    //                     <NavLink classNameName="nav-link text-light mx-3" to="/companies">Companies</NavLink>
    //                     <NavLink classNameName="nav-link text-light mx-3" to="/jobs">Jobs</NavLink>
    //                     <NavLink classNameName="nav-link text-light mx-3" to="/profile">Profile</NavLink>
    //                     <NavLink onClick={handleLogout} classNameName="btn btn-outline-light mx-3" to="/">Log Out</NavLink>
    //                 </div>
    //                 : <div classNameName="d-flex align-items-center ms-auto">
    //                     <NavLink classNameName="nav-link text-light mx-3" to="/register">Register</NavLink>
    //                     <NavLink classNameName="nav-link text-light mx-3" to="/login">Log In</NavLink>
    //                 </div>
    //             }


    //         </div>
    //     </nav>


    // );
}

export default NavBar;