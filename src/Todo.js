import React from 'react';

const Todo = ({ todo, toggleTodo }) => {

    const hangleTodoClick = () => {
        toggleTodo(todo.id);
    };

    return (
        <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={hangleTodoClick} />
        </label>
        {todo.name}
    </div>
);
};

export default Todo;