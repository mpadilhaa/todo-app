import "./ItemTodoList.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import ColorThemeContext from "../context/ColorThemeContext";

const ItemsListTodo = ({ item, index, handleTaskClick, handleDelete }) => {
  const { lightAndDarkColor } = useContext(ColorThemeContext);

  return (
    <div
      key={index}
      className={`list-item ${lightAndDarkColor ? "dark-list" : "light-list"}`}
    >
      <div className="checkbox-text">
        <span
          onClick={() => {
            handleTaskClick(index);
          }}
        >
          <BsFillCheckCircleFill
            className={item.completed ? "active-btn" : "inative-btn"}
          />
        </span>

        <p className={item.completed && "active-text"}> {item.text}</p>
      </div>

      <span
        onClick={() => {
          handleDelete(index);
        }}
      >
        <AiOutlineClose />
      </span>
    </div>
  );
};

export default ItemsListTodo;
