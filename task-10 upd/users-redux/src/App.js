import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './store/index'
import ModalPage from './components/ModalPage';

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Header></Header>
        <Switch>
          <Provider store={store}>
            <Route path="/users/edit" exact component={ModalPage}></Route>
            <Route path="/users" exact component={Users}></Route>
            <Route path="/" exact>
              <Redirect to="/users"/>
            </Route>
          </Provider>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
