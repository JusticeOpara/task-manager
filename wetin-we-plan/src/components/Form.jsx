import React from "react"


export default function Form({handleSubmit ,todo,setTodo,editId}) {
    return (
        <>
            <form
                className='todo-form'
                onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    placeholder="Enter Quick Task Here" />

                <button type="submit">
                    {editId ? "Edit" : "Go"}
                </button>

            </form>
        </>
    )
}