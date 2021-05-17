import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./modules/Dashboard/Dashboard";
import Albums from "./modules/Albums/Albums";
import Header from './modules/common/components/Header';
import { Container } from '@material-ui/core';
import Users from './modules/Users/components/Users';


function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/albums" component={Albums}></Route>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Router>
    </Container> 
  );
}

export default App;