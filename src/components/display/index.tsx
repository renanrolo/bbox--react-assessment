import React from "react";
import "./styles.css";

interface Props {
  value: string;
}

const Display: React.FC<Props> = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

export default Display;
