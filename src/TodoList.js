import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

const TodoList = () => {
    const INITIAL_STATE = [
        { key: uuid(), todo: 'Clean Up Dog Poop' }
    ]
    const [ todos, setTodos ] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, key: uuid()}])
    }
    const removeTodo = (e) => {
        const todo = e.target.parentNode;
        let todoList = [...todos];
        todoList.splice(todo, 1);
        setTodos(todoList);
    }
    const editTodo = e => {
        const todo = e.target;
        console.log(todo);
    }
    return (
        <div className="TodoList">
            <ol className="TodoList-todos">
                {todos.map(({ key, todo }) => 
                    <Todo 
                        key={key}
                        todo={todo}
                        removeTodo={ removeTodo }
                        editTodo={ editTodo }
                    />
                )}
            </ol>
            <NewTodoForm addTodo={ addTodo } />
        </div>
    )
}

export default TodoList;