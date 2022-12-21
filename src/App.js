/** @format */
import React from "react";
import "./App.css";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  return (
    <div className="App">
      <div class="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(15))}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={changeTheNumber}
          />
          <a
            className ="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
