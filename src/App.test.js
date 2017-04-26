import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={StoreInstance}>
    <App />
  </Provider>, div);
});
