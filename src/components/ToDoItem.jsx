import React, { useState } from "react";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleCLick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleCLick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
