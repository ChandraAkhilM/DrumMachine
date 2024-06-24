import styles from "./Disp.module.css";

const Disp = ({ displayValue }) => {
  return <input className={styles.Display} type="text" value={displayValue} readOnly />;
};

export default Disp;
