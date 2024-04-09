import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
};

export default App;
