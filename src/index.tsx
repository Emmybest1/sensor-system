import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootStore } from 'redux/root.store';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('rootApp')
);
reportWebVitals();
