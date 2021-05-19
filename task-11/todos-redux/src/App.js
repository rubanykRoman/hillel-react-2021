import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import store from './store/index';
import { Container } from '@material-ui/core';
import TodoForm from './components/TodoForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <Container maxWidth="lg">
            <Router>
                <Switch>
                    <Provider store={store}>
                        <Route path="/todos" exact component={TodoList}></Route>
                        <Route path="/form" component={TodoForm} />
                        <Route path="/" exact>
                            <Redirect to="/todos" />
                        </Route>
                    </Provider>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
