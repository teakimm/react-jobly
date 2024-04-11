import UserContext from "./UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

/** Presentational component for displaying homepage
 *
 * State: None
 * Props: None
 *
 * RoutesList -> HomePage
*/
function HomePage() {
    const { currUser } = useContext(UserContext);

    return (
        <div>
            <h1>Jobly</h1>
            <p>Jobs! Get yours jobs here</p>
            {currUser
                ? <div>
                    <h3>Welcome back {currUser.username}</h3>
                </div>
                : <div>
                    <NavLink className="btn btn-primary mx-2" to="/register">Register</NavLink>
                    <NavLink className="btn btn-primary" to="/login">Log In</NavLink>
                </div>
            }
        </div>
    );
}

export default HomePage;