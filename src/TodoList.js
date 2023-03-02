import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

const TodoList = () => {
    const INITIAL_STATE = [
        { id: uuid(), todo: 'Clean Up Dog Poop' }
    ]
    const [ todos, setTodos ] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }
    const editTodo = e => {
        const todo = e.target;
        console.log(todo);
    }
    return (
        <div className="TodoList">
            <ol className="TodoList-todos">
                {todos.map(({ id, todo }) => 
                    <Todo 
                        key={id}
                        id={id}
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