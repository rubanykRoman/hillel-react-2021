import { Provider } from 'react-redux';
import List from './components/List';
import store from './store/store';
import { Container } from '@material-ui/core';
import Form from './components/Form';

function App() {
    return (
        <Container maxWidth="lg">
            <Provider store={store}>
                <List />
                <Form />
            </Provider>
        </Container>
    );
}

export default App;
