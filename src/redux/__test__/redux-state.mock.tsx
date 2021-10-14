import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

type ReduxProviderPropTypes = {
  children: React.ReactNode;
  reduxStore?: any;
  internal?: boolean;
};

export const ReduxProvider: React.FC<ReduxProviderPropTypes> = ({ children, reduxStore, internal }) => {
  const initialState = {
    session: {},
    events: {},
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  return <>{internal ? <Provider store={store}>{children}</Provider> : <Provider store={reduxStore}>{children}</Provider>}</>;
};

ReduxProvider.defaultProps = {
  internal: true,
};
