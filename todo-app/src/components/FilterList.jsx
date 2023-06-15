import "./FilterList.css";

import { useContext } from "react";
import ColorThemeContext from "../context/ColorThemeContext";

const FilterList = ({
  handleFilterChange,
  handleDeleteCompleted,
  listTasks,
}) => {
  const { lightAndDarkColor } = useContext(ColorThemeContext);

  return (
    <div
      className={`filter-list ${
        lightAndDarkColor ? "dark-list" : "light-list"
      }`}
    >
      <div className="counter-tasks">
        <h5>{listTasks.length} items left</h5>
      </div>
      <div className="list-btn">
        <button onClick={() => handleFilterChange("all")}>
          <h4>All</h4>
        </button>
        <button onClick={() => handleFilterChange("active")}>
          <h4>Active</h4>
        </button>
        <button onClick={() => handleFilterChange("completed")}>
          <h4>Completed</h4>
        </button>
      </div>
      <div onClick={handleDeleteCompleted}>
        <h5>Clear compelted</h5>
      </div>
    </div>
  );
};

export default FilterList;
