import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = '';

    const [ formData, setFormData ] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        })) 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="NewTodoForm">
                <label className="NewTodoForm-label" htmlFor="todo">New Todo?</label>
                <input
                    id="todo"
                    type="text"
                    name="todo"
                    placeholder="New Todo"
                    value={formData.todo}
                    onChange={handleChange}
                />
                <button className="NewTodoForm-btn">Add todo</button>

            </form>
        </div>
    )
}

export default NewTodoForm;