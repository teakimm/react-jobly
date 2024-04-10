import { BrowserRouter } from "react-router-dom";
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
        const user = await JoblyApi.getUser(currUser.username, token);
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    }
    updateUserInfo();
  }, [token]);

  /** Takes in loginData like {username: ..., password: ...} */
  async function login(loginData) {
    const token = await JoblyApi.login(loginData.username, loginData.password);
    setCurrUser({ username: loginData.username });
    setToken(token);
  }

  function logout() {
    setToken(null);
  }

  async function register(registerData) {
    const token = await JoblyApi.register(registerData);
    setCurrUser({ username: registerData.username });
    setToken(token);
  }

  console.log(currUser);
  console.log(token);

  return (
    <userContext.Provider value={{ currUser, token }}>
      <BrowserRouter>
        <NavBar />
        <RoutesList login={login} register={register} />
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
