import React from "react";
import "./styles.css";

type CallBack = (...args: any[]) => void

interface Props {
  handler: CallBack;
  text: string;
  addClass?: string;
}

const Button: React.FC<Props> = ({ handler, text, addClass = "" }) => {
  return (
    <div className={`component-button ${addClass}`}>
      <button onClick={handler}>{text}</button>
    </div>
  );
};

export default Button;