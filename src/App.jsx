import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import JoblyApi from "../api";
import { jwtDecode } from "jwt-decode";


/** Component for entire page.
 *
 * Props: none
 * State: currUser like - {username, firstName, lastName, email, isAdmin, applications}
 *          applications being an array [jobId, ...]
 * token - jwt token. Contains information of the currUser
 *
 * App -> NavBar, RoutesList
 *
*/

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  /** sets the token on mount and when the token changes. Decodes the token
   * and makes an api call with the token to receive user information
   */
  useEffect(function updateUserInfoOnTokenChange() {
    async function updateUserInfo() {
      JoblyApi.token = token;
      try {
        const user = await JoblyApi.getUser(jwtDecode(token).username);
        setCurrUser(user);
      } catch {
        setCurrUser(null);
      }
    }
    updateUserInfo();
  }, [token]);

  /** Takes in loginData like {username: ..., password: ...} and makes an api call
   * to receive a token. Sets that token in state.
  */
  async function login(loginData) {
    const token = await JoblyApi.login(loginData.username, loginData.password);
    setToken(token);
  }

  /** sets the token to null, effectively logging out the user */
  function logout() {
    setToken(null);
  }

  /** takes registerForm data like: {username, password, firstName, lastName, email}
   * and makes an api call to receive a token. Sets that token in state
   */
  async function register(registerData) {
    const token = await JoblyApi.register(registerData);
    setToken(token);
  }

  return (
    <userContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <NavBar logout={logout} />
        <RoutesList login={login} register={register} />
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
