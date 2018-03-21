import React from 'react';
import { Provider } from 'react-redux';

import App from './src/App';
import store from './src/redux/store';

const main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default main;
