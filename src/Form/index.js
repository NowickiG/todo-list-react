
import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();
    if (trimmedContent !== "") {
      addNewTask(trimmedContent);
      setNewTaskContent("");
    }
  };
  return (
    <form className="form"
      onSubmit={onFormSubmit}
    >
      <input
  
        title="pole nie może być puste"
        autoFocus
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) =>
          setNewTaskContent(target.value)}
      />
      <button
        className="form__button">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;