import React, {useState, useEffect} from "react";

import Button from "../Button/Button";
import Operation from "../Operation/Operation";
import "./App.css";
import {Numbers, Operations1, Operations2} from "./AppData"

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const methods = ['/', '*', '+', '-', '%', '+/-'];

function App(props) {
  const [valueF, setValueF] = useState("x")
  const [method, setMethod] = useState('');
  const [prevValue, setPrevValue] = useState('');
  // const [result, setResult] = useResult({ valueF:'null', prevValue:'null', op:'null' });

  function Click(value) {
    if(value === '=') {
      if(valueF !== 'x' && prevValue && method) {
        setValueF(eval(prevValue + method + valueF));
      }
    }
    if(value === 'AC') {
      setValueF('x');
      setPrevValue('');
      setMethod('');
    }

    if(methods.includes(value)) {
      if(value === '%' && !isNaN(valueF)) {
        setValueF(valueF / 100)
      }else if(value === '+/-' && !isNaN(valueF)) {
        setValueF(-valueF);
      }else {
        setValueF('x');
      }

      if(value !== '%' && value !== '+/-') {
        if(valueF !== 'x') {
          setMethod(value);
          setPrevValue(valueF);
          setValueF('');
        }
      }
    }
    if(numbers.includes(value)) {
        if(valueF === 'x') {
          setValueF(value);
        }else {
          setValueF(valueF + value);
        }
    }

  }

  return(
    <div className="App">
      <div className="board">
        <div className="display">
          <div className="display_item">
            <p className="display_p">
              {(
                valueF === 'x' ? '0' : valueF)
              }
            </p>
          </div>
        </div>

        <div className="buttons">
          <div className="button1">
              {
                Numbers.map(item => (
                  <div key={item.id}>
                    <Button value={item.value} Click={Click}/>
                  </div>
                ))
              }
          </div>

          <div className="button2">
              {
                Operations1.map(item => (
                  <div key={item.id}>
                    <Operation id={item.id} value={item.value} Click={Click}/>
                  </div>
                ))
              }
          </div>

          <div className="button3">
              {
                Operations2.map(item => (
                  <div key={item.id}>
                    <Operation id={item.id} valueF={valueF} value={item.value} Click={Click}/>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
