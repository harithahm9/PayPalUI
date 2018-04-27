import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/Approuter'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const state = store.getState();
const AppRoute = (

<Provider store={store} /*provider  take all the current state to the app wherever it is needed  */>
<AppRouter/>
</Provider>
)

ReactDOM.render(AppRoute, document.getElementById('root'));
registerServiceWorker();
