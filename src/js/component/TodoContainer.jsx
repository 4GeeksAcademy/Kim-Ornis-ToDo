import React, {useState} from "react";
import{Todo} from "./Todo";

export function TodoContainer () {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
    const todoDelete = id => {
        setTodos(todos.filter(todo => todo.id !==id))
    }
    const todoEdit = id => {
        setTodos(todos.edit(todo => todo.id))
    }

	return (
        <>
            <div id="container">
                <h2>ToDo's</h2>
                <input type="text" 
                    value={task}
                    onChange={(event) => {
                        setTask(event.target.value);
                    }}
                    onKeyDown={(event) => {
                    const key = event.key;
                    if (key === 'Enter') {
                        const newTodo = {
                            task,
                            id: todos.length +1,
                    
                    }
                    setTodos([...todos, newTodo]);
                    setTask("");
                    }
                }}
                />

                {todos.map((todo) => (
        
                    <Todo key={todo.id} todo={todo} todoDelete = {todoDelete} todoEdit = {todoEdit}/>
                    
                    ))}
            </div>
            
        </>
	)
}