import React, { FC, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
// import { typescriptBasics } from './typescripBasics';

// typescriptBasics();

const App: FC = () => {
  const [todo, setTodo] = useState<Todo | undefined>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, {id: 0, isDone: false, todo: todo?.todo}])
  }

  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <InputField todo={todo === undefined ? {
        id: 0,
        isDone: false,
        todo: ""
      } : todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* <div>{todo?.todo}</div> */}
      {todos?.map((todo) => {
        return (
          <div>{todo.todo}</div>
        )
      })}
    </div>
  );
};

export default App;
