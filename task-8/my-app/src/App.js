import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./modules/Dashboard/Dashboard";
import Users from "./modules/Users/Users";
import Albums from "./modules/Albums/Albums";
import Header from './modules/Header/Header';
import ModalPage from './modules/Users/ModalPage';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/users/edit" component={ModalPage}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/albums" component={Albums}></Route>
        </Switch>
      </Router>
    </Container> 
  );
}

export default App;