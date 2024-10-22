import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainers from "./components/ButtonContainers";
import Display from "./components/Display";

function App({}) {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "<") {
      const newDisplayValue = calVal.slice(0, -1);
      setCalVal(newDisplayValue);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.full}>
      <h1 className={styles.heading}>Calculator</h1>
      <div className={styles.container}>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonContainers onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
