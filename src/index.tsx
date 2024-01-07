import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import { createStore } from 'redux';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);
store.dispatch({
  type:"ADD_TODO",
  text:"Learn Redux"
})

console.log(" store.getState()  ", store.getState());

const render=()=>root.render(
  <React.StrictMode>
    <App 
      value={store.getState()} 
      countValue={store.getState().counter }
      onIncrement={() => store.dispatch({ type: 'IINCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </React.StrictMode>
);

render()
store.subscribe(render);

reportWebVitals();
