import {createStore} from 'redux';
import Reducers  from '../reducer/reducer';
const configureStore = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default configureStore;