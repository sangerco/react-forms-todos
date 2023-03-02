import React from "react";
import './Todo.css';

const Todo = ({ todo, removeTodo, editTodo }) => {
    return (
        <div className="Todo">
            <li className="Todo-item">{`${todo}`}</li>
            <button className="Todo-edit-btn" onClick={editTodo}>Edit</button>
            <button className="Todo-delete-btn" onClick={removeTodo}>Done!</button>
        </div>
    )
}

export default Todo;