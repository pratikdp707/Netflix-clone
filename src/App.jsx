import './app.scss'
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Watch from './Pages/Watch/Watch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {

  const { user } = useContext(AuthContext);

  return <div>

    <Router>
    <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>



    {/* <Home/> */}
    {/* <Watch/> */}
    {/* <Register/> */}
    {/* <Login/> */}
  </div>;
};

export default App;