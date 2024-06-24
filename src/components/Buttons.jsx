import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const buttonList = [
    { id: "Q", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { id: "W", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { id: "E", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { id: "A", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { id: "S", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { id: "D", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { id: "Z", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { id: "X", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { id: "C", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((item) => (
        <div key={item.id}>
          <button
            id={item.id}
            className={styles.button}
            onClick={() => onButtonClick(item.id)}
          >
            {item.id}
          </button>
          <audio id={item.id + '-audio'} src={item.sound}></audio>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
