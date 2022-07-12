import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import todoListState from "../todoListState";
import { getId } from "../../helpers/helpers";

const TodoItemCreator = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => setInputValue(value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
