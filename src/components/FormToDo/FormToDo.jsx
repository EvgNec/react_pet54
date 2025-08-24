import { useState } from 'react'

function FormToDo({ addToDo }) {
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo.trim()) return // не додаємо порожнє
    addToDo(todo)
    setTodo('') // очищаємо поле
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exampleInput">Create to-do</label>
        <input
          autoFocus
          name="todo"
          type="text"
          id="exampleInput"
          onChange={handleChange}
          value={todo}
          placeholder="Введіть вашу задачу"
        />
      </div>
      <button type="submit">Add to-do</button>
    </form>
  )
}

export default FormToDo