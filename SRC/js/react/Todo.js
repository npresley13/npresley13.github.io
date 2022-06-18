import React, { useState } from 'react';
import { TodoForm } from './TodoForm';

//Main Todo App
export function Todo({todos, updateTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div className="todo-row">
            {todos.map(todo => (
                <div className="single-todo" key={todo.id}>
                    {todo.text}
                    <div className="edit-todos">
                        <div 
                            onClick={() => setEdit({id: todo.id, value: todo.text})} 
                            className="edit-todo"
                        >
                            +
                        </div>
                        <div 
                            className="delete-todo"
                            onClick={() => removeTodo(todo.id)}>-</div>
                    </div>
                </div>
            ))}
        </div>
    )
}