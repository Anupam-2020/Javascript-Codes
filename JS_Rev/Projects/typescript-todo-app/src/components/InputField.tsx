import React, { Dispatch, FC, useState } from "react";
import "./InputField.css";
import { Todo } from "../model";

interface Props {
    todo: Todo;
    setTodo: Dispatch<React.SetStateAction<Todo | undefined>>;
    handleAdd: (e: React.FormEvent) => void
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    let [task, setTask] = useState<Todo>();
    let [idCount, setIdCount] = useState<number>(0);

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setTask({
            id: idCount,
            isDone: false,
            todo: e.target.value
        });
        // console.log(e.target.value);
    }

    function addTask(e: React.FormEvent<HTMLButtonElement>): void {
        // e.preventDefault();
        setTodo(task);
        setIdCount(idCount+1);
    }


  return (
    <form className="input" onSubmit={handleAdd}>
      <input className="input__box" placeholder="Enter task" type="input" value={task?.todo} onChange={inputHandler}/>
      <button className="submit_btn" type="submit" onClick={addTask}>Add Task</button>
    </form>
  );
};

export default InputField;
