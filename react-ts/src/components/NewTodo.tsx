import React, { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void}> = (props) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // current? khi chưa dùng hay k có giá trị sẽ tự động gắn null
    // nếu biết chắc chắn 100% có giá trị thì nên bỏ vào current!
    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    todoTextInput.current!.value = ""
  };

  const todoTextInput = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
