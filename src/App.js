import React from 'react';
import './App.css';
import MainRoute from './route/MainRoute'
import {Provider} from 'unistore/react'
import {store} from './store/MainStore'

function App() {
  return (
      <Provider store={store}>
        <MainRoute />
      </Provider>
  );
}

export default App;
