import React from 'react';
import './App.css';

type Props={
  value:any,
  countValue:number,
  onIncrement:()=>void,
  onDecrement:()=>void  
}


function App({value,countValue ,onIncrement, onDecrement} : Props) {


  return (
    <div className="App">
    
         Cliked : { countValue ?  countValue:'times'} 
        <button onClick={onIncrement}>
          +
        </button>
        <button onClick={onDecrement}>
          -
        </button>
    </div>
  );
}

export default App;
