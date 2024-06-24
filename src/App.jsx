import './App.css';
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Disp from './components/Disp';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log("button clicked: " + buttonText);
    playSound(buttonText);
    const tones = {
      "Q": "Heater-1",
      "W": "Heater-2",
      "E": "Heater-3",
      "A": "Heater-4",
      "S": "Heater-6",
      "D": "Dsc_oh",
      "Z": "Kick_n_Hat",
      "X": "RP4_KICK_1",
      "C": "Cev_H2"
    };
    setCalVal(tones[buttonText] || "");
  };

  const playSound = (buttonText) => {
    const audio = document.getElementById(buttonText + '-audio');
    if (audio && typeof audio.play === 'function') {
      console.log("Playing sound for button:", buttonText);
      audio.currentTime = 0;
      audio.play().then(() => {
        console.log("Sound played successfully for button:", buttonText);
      }).catch(error => {
        console.error("Error playing sound:", error);
      });
    } else {
      console.error("Audio element not found or invalid for button:", buttonText);
    }
  };

  return (
    <>
      <Container id="drum-machine" className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className={styles.calculator}>
          <Disp displayValue={calVal}></Disp>
          <div className={styles.buttonContainer}>
            <Buttons onButtonClick={onButtonClick}></Buttons>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
