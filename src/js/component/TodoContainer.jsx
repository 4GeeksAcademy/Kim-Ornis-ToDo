import React, {useState} from "react";
import{Todo} from "./Todo";

export function TodoContainer () {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

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

                {todos.map((todos) => (
        
                    <Todo key={todos.id} todos={todos} />
                    
                    ))}
            </div>
            
        </>
	)
}