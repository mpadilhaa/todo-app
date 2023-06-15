import "./InputList.css";

import { useContext } from "react";

import ColorThemeContext from "../context/ColorThemeContext";

const InputList = ({ task, setTask, handleSubmit }) => {
  const { lightAndDarkColor } = useContext(ColorThemeContext);

  return (
    <form onSubmit={handleSubmit}>
      <span></span>
      <input
        className={`input-list ${
          lightAndDarkColor ? "dark-input" : "light-input"
        }`}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default InputList;
