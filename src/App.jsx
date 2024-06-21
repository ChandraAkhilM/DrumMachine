
import './App.css'
import styles from "./App.module.css";
import Buttons from "./components/Buttons"
import Disp from './components/Disp';
import { useState } from 'react';

function App() {

  let [calVal,setCalVal] =useState("");
  const onButtonClick= (buttonText)=> {
    console.log("button clicked."+event)
    if (buttonText ==="C"){
        setCalVal('');
    } else if (buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValuew= calVal+ buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <>
    <div className={styles.calculator}>
      <Disp displayValue={calVal}></Disp>
      <div className={styles.buttonContainer}>
      <Buttons onButtonClick = {onButtonClick}></Buttons>
      </div>
    </div>
    </>
  )
}

export default App
