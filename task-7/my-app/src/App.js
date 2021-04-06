import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./modules/Dashboard/Dashboard"
import Users from "./modules/Users/Users"
import Albums from "./modules/Albums/Albums"

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Dashboard</Link>
        <br></br>
        <Link to="users">Users</Link>
        <br></br>
        <Link to="albums">Albums</Link>
      </header>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/albums" component={Albums}></Route>
      </Switch>
    </Router>
  );
}

export default App;
