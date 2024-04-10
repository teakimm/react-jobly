import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import userContext from "./userContext";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  return (
    <userContext.Provider value={{ user: null }}>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
