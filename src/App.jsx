import { BrowserRouter, redirect } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from "../api";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);

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

  async function register(registerData) {
    const token = await JoblyApi.register(registerData);
    JoblyApi.token = token;
    setCurrUser({ username: registerData.username });
    setToken(token);
  }


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
