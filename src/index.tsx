import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers/index.js';
import thunk from 'redux-thunk';

// declare global {
// 	interface Window {
// 		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


