import React from "react";
import "./styles.css";
import Button from "../button";

type CallBack = (...args: any[]) => void

interface Props {
  handler: CallBack;
}

const ButtonsPanel: React.FC<Props> = ({ handler }) => {
  return (
    <div className="component-button-panel">
      <div>
        <Button text="AC" handler={handler} />
        <Button text="+/-" handler={handler} />
        <Button text="%" handler={handler} />
        <Button text="÷" handler={handler} addClass="orange" />
      </div>
      <div>
        <Button text="7" handler={handler} />
        <Button text="8" handler={handler} />
        <Button text="9" handler={handler} />
        <Button text="x" handler={handler} addClass="orange" />
      </div>
      <div>
        <Button text="4" handler={handler} />
        <Button text="5" handler={handler} />
        <Button text="6" handler={handler} />
        <Button text="-" handler={handler} addClass="orange" />
      </div>
      <div>
        <Button text="1" handler={handler} />
        <Button text="2" handler={handler} />
        <Button text="3" handler={handler} />
        <Button text="+" handler={handler} addClass="orange" />
      </div>
      <div>
        <Button text="0" handler={handler} addClass="wide" />
        <Button text="." handler={handler} />
        <Button text="=" handler={handler} addClass="orange" />
      </div>
    </div>
  );
};

export default ButtonsPanel;