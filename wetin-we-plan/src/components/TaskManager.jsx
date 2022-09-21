import React from "react"
export default function TaskManager({ todos, handleEdit, handleDelete }) {
    return (
        <>
            <p className="task-text">TODAY'S TASK</p>

            <ul className="all-todos">
                {todos.map((task) => (

                    <li key={task.id} className="task-container">
                        <span className="todo-task">
                            {task.todo}
                        </span>

                        <a className="btn-flex-end">
                            <button onClick={() => handleEdit(task.id)}>Edit</button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </a>
                    </li>
                ))}


            </ul>
        </>
    )
}