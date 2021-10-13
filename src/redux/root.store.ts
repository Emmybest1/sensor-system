import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Middleware, Store } from 'redux';

import { rootReducer } from './root.reducer';

const middlewares: Middleware[] = [reduxThunk];

process.env.NODE_ENV === 'development' && middlewares.push(reduxLogger);

const rootStore: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export { rootStore };
