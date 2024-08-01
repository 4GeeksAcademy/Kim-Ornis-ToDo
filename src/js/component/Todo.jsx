import React, {useEffect, useState} from "react";


export function Todo (props){
    const {todos} = props;
    const todoDelete = (deletingTodo) => {
        const todos = todos.filter((todos) => todos !== deletingTodo)
        setTodos(todos);
    };

    return(
        <div id="todoInput">
            {todos.task}
            <button type="button" class="btn-close" aria-label="Close" 
                    onClick={() => todoDelete(todos)}></button>
        </div>
        
    )
}