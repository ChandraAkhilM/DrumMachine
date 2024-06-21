import styles from "./Buttons.module.css";

const Buttons = ({onButtonClick})=>{
    const buttonList =["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return(
        <div className={styles.buttonContainer}>
            {buttonList.map((item) => (<button className={styles.button} onClick={()=> onButtonClick(item)} key={item}>{item}</button>))}
      </div>
    );
};

export default Buttons;