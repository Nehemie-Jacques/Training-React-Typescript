import React from "react";
import { useState } from "react";

interface Todo {
    id : number;
    title : string;
    completed : boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title : string) => {
        const newTodo: Todo = {
            id: todos.length + 1,
            title, 
            completed: false,
        }
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <button onClick={() => addTodo("New Todo")}>Add Todo</button>
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>
                        {todo.title} {todo.completed ? "Completed" : "Not Completed"}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TodoList