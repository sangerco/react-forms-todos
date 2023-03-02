import React from "react";
import './Todo.css';

const Todo = ({ id, todo, removeTodo, editTodo }) => {
    const remove = () => removeTodo(id)
    return (
        <div className="Todo">
            <li className="Todo-item">{`${todo}`}</li>
            <button className="Todo-edit-btn" onClick={editTodo}>Edit</button>
            <button className="Todo-delete-btn" onClick={remove}>Done!</button>
        </div>
    )
}

export default Todo;