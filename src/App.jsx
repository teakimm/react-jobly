import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import JoblyApi from "../api";

/** Component for entire page.
 *
 * Props: none
 * State: currUser, token
 *
 * App -> NavBar, RoutesList
 *
 * TODO: improve this docstring: give evample of currUser
*/

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

  // TODO: Decode the token inside of useEffect -- this is bad rn
  useEffect(function updateUserInfoOnTokenChange() {
    async function updateUserInfo() {
      if (currUser?.username && token) {
        const user = await JoblyApi.getUser(currUser.username);
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    }
    updateUserInfo();
  }, [token]);

  /** Takes in loginData like {username: ..., password: ...} */
  async function login(loginData) {
    try {
      const token = await JoblyApi.login(loginData.username, loginData.password);
      JoblyApi.token = token;
      setCurrUser({ username: loginData.username });
      setToken(token);
      return {
        valid: true,
        errors: []
      };
    } catch (err) {
      return {
        valid: false,
        errors: err
      };
    }
  }

  function logout() {
    setToken(null);
  }

  //TODO: move setting of static token to the useEffect function
  async function register(registerData) {
    try {
      const token = await JoblyApi.register(registerData);
      JoblyApi.token = token;
      setCurrUser({ username: registerData.username });
      setToken(token);
      return {
        valid: true,
        errors: []
      };
    } catch (err) {
      return {
        valid: false,
        errors: err
      };
    }
  }

  // TODO: context does not have to include token
  return (
    <userContext.Provider value={{ currUser, token }}>
      <BrowserRouter>
        <NavBar logout={logout} />
        <RoutesList login={login} register={register} />
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
