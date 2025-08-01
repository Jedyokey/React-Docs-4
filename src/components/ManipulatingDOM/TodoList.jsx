import React, { useState, useRef } from 'react'
import { flushSync } from 'react-dom';

const TodoList = () => {
    const listRef = useRef(null);
    const [text, setText] = useState("");
    const [todos, setTodos] = useState(initialTodos);

    const handleAdd = () => {
        const newTodo = {id: nextId++, text: text};
        flushSync(() => {
            setText("");
            setTodos([...todos, newTodo]);
        });

        listRef.current.lastChild.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }

  return (
    <div className='todo-list-container'>
        <button onClick={handleAdd} disabled={!text.trim()}>
            Add
        </button>
        <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <ul ref={listRef} className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default TodoList


let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
    initialTodos.push({
        id: nextId++,
        text: "Todo #" + (i + 1)
    });
}