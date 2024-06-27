import reactLogo from "./assets/react.svg";

import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slices/counter";
import { TestComp } from "./components/TestComp";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} alt="logo" />
        <h1>Count is {count} </h1>
        <button onClick={() => dispatch(increment())}>Incremet</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <TestComp />
      </header>
    </div>
  );
}

export default App;
