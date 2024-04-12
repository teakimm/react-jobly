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
        <div className="col-12 d-flex align-items-center flex-column" style={{
            backgroundImage: "url(/public/homepageImg.jpg", backgroundSize: "cover", backgroundRepeat: "no-repeat"
        }}>
            <img src="../public/joblyLogo.png" alt="logo" style={{ width: "40vw" }} />
            <div className="mt-1" style={{ color: "white", textAlign: "center", width: "15rem" }}>
                <p>Jobs! Get yours jobs here</p>
                {currUser
                    ? <div>
                        <Alert messages={[`Welcome back ${currUser.username}`]} type={"alert-success"} />
                    </div>
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