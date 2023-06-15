import { useState, useContext } from "react";
import "./App.css";
import ItemsListTodo from "./components/ItemsListTodo";
import InputList from "./components/InputList";
import FilterList from "./components/FilterList";
import ColorThemeContext from "./context/ColorThemeContext";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function App() {
  const { handleColorTheme, lightAndDarkColor } = useContext(ColorThemeContext);
  const [task, setTask] = useState("");

  const [listTasks, setListTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: task,
      completed: false,
      active: true,
    };
    setListTasks((prevTasks) => [...prevTasks, newTask]);

    setTask("");
  }

  console.log(listTasks.length);

  const handleTaskClick = (index) => {
    setListTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        completed: !updatedTasks[index].completed,
        active: !updatedTasks[index].active,
      };
      return updatedTasks;
    });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const showItems = () => {
    let filteredItems = listTasks;

    if (filter === "active") {
      filteredItems = listTasks.filter((item) => !item.completed);
    } else if (filter === "completed") {
      filteredItems = listTasks.filter((item) => item.completed);
    }

    return filteredItems.map((item, index) => (
      <ItemsListTodo
        item={item}
        index={index}
        handleTaskClick={handleTaskClick}
        handleDelete={handleDelete}
      />
    ));
  };

  const handleDeleteCompleted = () => {
    const updatedItems = listTasks.filter((item) => !item.completed);
    setListTasks(updatedItems);
  };

  function handleDelete(index) {
    listTasks.splice(index, 1);
    setListTasks([...listTasks]);
  }

  return (
    <div className={`App ${lightAndDarkColor ? "dark" : "light"}`}>
      {lightAndDarkColor && (
        <img src="../src/assets/bg-desktop-dark.jpg" alt="" />
      )}
      {!lightAndDarkColor && (
        <img src="../src/assets/bg-desktop-light.jpg" alt="" />
      )}
      <div className="todo-list">
        <div className="todo-text">
          <h2>TODO</h2>
          <span onClick={handleColorTheme}>
            {!lightAndDarkColor && <BsFillMoonFill />}
            {lightAndDarkColor && <BsFillSunFill />}
          </span>
        </div>
        <div className="form-list">
          <InputList
            task={task}
            setTask={setTask}
            handleSubmit={handleSubmit}
          />
        </div>
        <div
          className={`list-tasks ${
            lightAndDarkColor ? "dark-list" : "light-list"
          }`}
        >
          {showItems()}
          {listTasks.length > 0 && (
            <div
              className={`list ${
                lightAndDarkColor ? "dark-list" : "light-list"
              }`}
            >
              <FilterList
                handleFilterChange={handleFilterChange}
                handleDeleteCompleted={handleDeleteCompleted}
                listTasks={listTasks}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
