import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import JoblyApi from "../api";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "./useLocalStorage";

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
  const [token, setToken] = useLocalStorage("token");
  const [firstLoading, setFirstLoading] = useState(true);

  /** sets the token on mount and when the token changes. Decodes the token
   * and makes an api call with the token to receive user information
   */
  useEffect(function updateUserInfoOnTokenChange() {

    async function updateUserInfo() {
      try {
        const user = await JoblyApi.getUser(jwtDecode(token).username);
        setCurrUser(user);
      } catch {
        setCurrUser(null);
      }
      setFirstLoading(false);
    }
    JoblyApi.token = token;
    updateUserInfo();
  }, [token]);

  /** Takes in loginData like {username: ..., password: ...} and makes an api call
   * to receive a token. Sets that token in state.
  */
  async function login(loginData) {
    const token = await JoblyApi.login(loginData);
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

  async function updateProfile(updateData) {
    const updatedUser = await JoblyApi.updateUser(currUser.username, updateData);
    setCurrUser(currUser => ({
      ...currUser,
      ...updatedUser
    }));
  }

  return (<div className="App">
    <UserContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <NavBar logout={logout} />
        {firstLoading || <RoutesList login={login} register={register} updateProfile={updateProfile} />}
      </BrowserRouter>
    </UserContext.Provider>
  </div>
  );
};

export default App;
