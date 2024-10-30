import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='container'>
      <Counter />
    </div>
  );
}


function Counter () {

  const [step, setStep] = useState(1);
  const [count, setCounter] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count)

  function increaseSteps() {
    setStep((step) => step + 1)
  }

  function decreaseSteps() {
    setStep((step) => step - 1)
  }

  function increaseCounter() {
    setCounter((count) => count + step);
  }

  function decreaseCounter() {
    setCounter((count) => count - step);
  }

  return ( 
    <>
    <div className='steps'>
      <button onClick={decreaseSteps}> - </button>
      <p> Steps: { step } </p>
      <button onClick={increaseSteps}> + </button>
    </div>

    <div className='counter'>
      <button onClick={decreaseCounter}> - </button>
      <p> Count: { count } </p>
      <button onClick={increaseCounter}> + </button>
    </div>

    <div className='date-display'>
      <p>
        {/* { count > 0 && `${count} ${count === 1 ? "day" : "days"} from today is ${ today.toDateString() }` }
        { count < 0 && `${count * -1 } ${(count * -1) === 1 ? "day" : "days"} ago was ${ today.toDateString() }`}
        { count === 0 && `Today is ${ today.toDateString() } `  } */}
        {/* {`${count}`} */}
        
        { 
          count === 0 ? `Today is ${ today.toDateString() } ` :
          `${Math.abs(count) === 1 ? `${Math.abs(count)} day` : `${Math.abs(count)} days`} ${count < 0 ? 'ago was ' : 'from today is '} ${ today.toDateString()}`
        }
      </p>
    </div>
    </>
  )
}


export default App;
