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

        <div className="col-12 d-flex align-items-center flex-column">
            <img src="../public/joblyLogo.png" alt="logo" style={{ width: "40vw" }} />
            <div className="mt-1" style={{ color: "white", textAlign: "center" }}>
                <h1 className="mb-4">Jobs! Get your jobs here</h1>
                {currUser
                    ? <h3>
                        Welcome back {currUser.username}
                    </h3>
                    : <div>
                        <NavLink className="btn btn-light mx-2" to="/register">Register</NavLink>
                        <NavLink className="btn btn-light mx-2" to="/login">Log In</NavLink>
                    </div>
                }
            </div>
        </div >

    );
}

export default HomePage;