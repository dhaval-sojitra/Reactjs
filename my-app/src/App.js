import Props from "./Components/Props";
import Update from "./Components/Update";
import Fetch from "./Components/Fetch";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Props name="Dhaval Sojitra" city="Surat"/>
      <Update/>
      <Fetch/> */}
      {/* <Router>
        <h1>
          <Link to="/">Props</Link>
        </h1>
        <h1>
          <Link to="/Fetch">Fecth Data</Link>
        </h1>
        <h1>
          <Link to="/Update">Update</Link>
        </h1>

        <Route path="/">
          <Props name="Dhaval Sojitra" city="Surat"/>
        </Route>
        <Route path="/Fetch">
          <Fetch/>
        </Route>
        <Route path="/Update">
          <Update/>
        </Route>
      </Router> */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Fech data</Link>
              </li>
            </ul>
          </nav>

          <Route path="/about" component={Update} />
          <Route exact path="/" component={Fetch} />
        </div>
      </Router>
    </>
  );
}

export default App;
