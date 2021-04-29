import React, { useState } from "react";
import { evaluate } from "mathjs";
import ButtonsPanel from "./components/buttonPanel";
import Display from "./components/display";
import "./App.css";

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  function handleClick(event: React.FormEvent<HTMLInputElement>): void {
    try {
      const buttonName: string = event.currentTarget.innerText;
      if (buttonName === "AC") {
        setDisplayValue("0");
      }
      else if (buttonName === "=") {
        const replacedValue = displayValue.replace("x", "*").replace("÷", "/");
        const value: number = evaluate(replacedValue);
        setDisplayValue(value.toString());
      } else {
        if (displayValue === "0") {
          setDisplayValue(buttonName);
        }
        else {
          setDisplayValue((value) => `${value}${buttonName}`);
        }
      }
    } catch {
      setDisplayValue("0");
    }
  }

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonsPanel handler={handleClick} />
    </div>
  );
};

export default App;
