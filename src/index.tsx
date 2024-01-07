import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counter from './reducers';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(counter);


const render=()=>root.render(
  <React.StrictMode>
    <App 
      value={store.getState()} 
      onIncrement={() => store.dispatch({ type: 'IINCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </React.StrictMode>
);

render()
store.subscribe(render);

reportWebVitals();
