import "./FilterList.css";

import { useContext, useState } from "react";
import ColorThemeContext from "../context/ColorThemeContext";

const FilterList = ({
  handleFilterChange,
  handleDeleteCompleted,
  listTasks,
}) => {
  const [active, setActive] = useState(1);
  const { lightAndDarkColor } = useContext(ColorThemeContext);

  const handleActiveAndFilter = (id, filter) => {
    handleFilterChange(filter);
    setActive(id);
  };

  return (
    <div
      className={`filter-list ${
        lightAndDarkColor ? "dark-list dark-btn" : "light-list light-btn"
      }`}
    >
      <div className="counter-tasks">
        <h5>{listTasks.length} items left</h5>
      </div>
      <div className="list-btn">
        <button
          onClick={() => handleActiveAndFilter(1, "all")}
          className={active === 1 ? "active-filter" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleActiveAndFilter(2, "active")}
          className={active === 2 ? "active-filter" : ""}
        >
          Active
        </button>
        <button
          onClick={() => handleActiveAndFilter(3, "completed")}
          className={active === 3 ? "active-filter" : ""}
        >
          Completed
        </button>
      </div>
      <div onClick={handleDeleteCompleted}>
        <h5>Clear Completed</h5>
      </div>
    </div>
  );
};

export default FilterList;
