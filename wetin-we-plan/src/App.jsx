import React from 'react'
import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from './components/Form'
import TaskManager from './components/TaskManager'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const updatedTodos = todos.map((newTodo) =>
        newTodo.id === editTodo.id
          ? (newTodo = { id: newTodo.id, todo })
          : { id: newTodo.id, todo: newTodo.todo }
      )
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;

    }


    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("")
    }
  }
  function handleDelete(id) {
    const delTodo = todos.filter((to) => to.id !== id)
    setTodos([...delTodo])
  }
  function handleEdit(id) {
    const editTodo = todos.find((i) => i.id === id)
    setTodo(editTodo.todo)
    setEditId(id)
  }

  return (
    <div className="App">
      <div className='container'>

        <div className="nav-icon">
          <div className='left-nav-bar-icon'>
            <a className='nav-bar'>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>


          <div className='right-nav-icon'>
            <a className='search-icon'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>

            <a className='notification-icon'>git
              <FontAwesomeIcon icon={faBell} />
            </a>

          </div>

        </div>

        <h1 className='hero'>What's up Justice!</h1>

        <Form
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId} />

        <TaskManager
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete} />

      </div>
    </div>
  )
}

export default App
