import React, { useState } from 'react';
import './App.css';

type Props={
  value:any,
  countValue:number,
  onIncrement:()=>void,
  onDecrement:()=>void  
}


function App({value,countValue ,onIncrement, onDecrement} : Props) {
  const [todoValue, setTodoValue] = useState("");

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }

  const addTodo =(e:React.FormEvent<HTMLFormElement>): void=> {   
    e.preventDefault();
    console.log(" 전송 : " + JSON.stringify(todoValue) );

  
  };

  return (
    <div className="App">
    
         Cliked : { countValue ?  countValue:'times'} 
        <button onClick={onIncrement}>
          +
        </button>
        <button onClick={onDecrement}>
          -
        </button>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue}  onChange={handleChange}  />
        <input type="submit" />
      </form>

    </div>
  );
}

export default App;
