import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
 
export function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        //checks to make sure todo has text in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        //updates todos array to include new todo
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const resetList = (e) => {
        e.preventDefault();
        setTodos([]);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <TodoForm onSubmit={addTodo} resetList={resetList}/>
            <Todo 
                todos={todos}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
            />
            <h2>Completed Tasks</h2>
        </div>
    )
}