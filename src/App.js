import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // This function adds the value of the `input` state variable from the
  // previous value of the `result` state variable.
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  // This function subtracts the value of the `input` state variable from the
  // previous value of the `result` state variable.
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  // This function multiplies the value of the `input` state variable from the
  // previous value of the `result` state variable.
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  // This function divides the value of the `input` state variable from the
  // previous value of the `result` state variable.
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  // This function resets the value of the `input` state variable.
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
  }

  // This function resets the value of the `input` and `result` state variable.
  function resetResult(e) {
    e.preventDefault();
    setResult((result) => (result = 0));
    inputRef.current.value = null;
  }

  return (
    <div className='App'>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        {/* The `pattern` attribute is used to restrict the input that the user
        can enter into the input field. In this case, the user can only enter
        numbers. */}
        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
