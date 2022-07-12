import React from "react";
import { useRecoilValue } from "recoil";
import filteredTodoListState from "./filteredTodoListState";
import TodoItem from "./TodoItem/TodoItem";
import TodoItemCreator from "./TodoItemCreator/TodoItemCreator";
import TodoListFilters from "./TodoListFilters/TodoListFilters";
import todoListState from "./todoListState";
import TodoListStats from "./TodoListStats/TodoListStats";

const TodoList = ({}) => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
