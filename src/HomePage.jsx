import UserContext from "./UserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Alert from "./Alert";

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
        <div className="mt-5" style={{ color: "white", textAlign: "center" }}>
            <h1>Jobly</h1>
            <p>Jobs! Get yours jobs here</p>
            {currUser
                ? <div>
                    <Alert messages={[`Welcome back ${currUser.username}`]} type={"alert-success"}/>
                </div>
                : <div>
                    <NavLink className="btn btn-light mx-2" to="/register">Register</NavLink>
                    <NavLink className="btn btn-light mx-2" to="/login">Log In</NavLink>
                </div>
            }
        </div>
    );
}

export default HomePage;