import FormFilterTodo from 'components/FormToDo/FormFilterTodo'
import FormToDo from 'components/FormToDo/FormToDo'
import SearchBox from 'components/service/Search/SearchBox/SearchBox'
import SearchForm from 'components/service/SearchForm/SearchForm'
import ToDo from 'components/ToDo/ToDo'
import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'
import { useState } from 'react'

import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'


const ToDoList = () => {
  const {todo, setTodo} = useState('')
  const [searchText, setSearchText] = useState('');
  const [searchText2, setSearchText2] = useState('');
  const [todoList, setTodoList] = useState('')
	const [filteredTodoList, setFilteredTodoList] = useState(todoList)

	const [searchParams, setSearchParams] = useSearchParams()

	const filterText = searchParams.get('filter') ?? ''
  useEffect(() => {
		const localTodo = localStorage.getItem('todo')
		if (localTodo) setTodoList(JSON.parse(localTodo))
	}, [])

	useEffect(() => {
		todoList && localStorage.setItem('todo', JSON.stringify(todoList))
	}, [todoList])

	useEffect(() => {
		todoList &&
			setFilteredTodoList(
				todoList.filter((todo) =>
					todo.title
						.toLowerCase()
						.includes(filterText.trim().toLowerCase())
				)
			)
	}, [filterText, searchParams, todoList])

	const handleCheckCompleted = (id) => {
		setTodoList((prevTodoList) => {
			return prevTodoList.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		})
	}

	const handleDelete = (id) => {
		setTodoList((prevTodoList) => {
			return prevTodoList.filter((todo) => todo.id !== id)
		})

		toast.error('Delete successfully')
	}


const addToDo = (value) => {
  setTodoList((prevTodoList) => {
    return [
      ...prevTodoList,
      {
        id: nanoid(),
        title: value,
        completed: false,
      },
    ]
  })

  toast.success('Create successfully')
}



const handleSearch = (query) => {
  if (!query.trim()) return;
  setSearchText(query);
};
  const filter = (searchText2) => {
  setSearchText2(searchText2);
  const fetchSearchMovie = async () => {
  try {

  } catch (error) {
    console.error('Помилка завантаження:', error);
  }
}
fetchSearchMovie();
}
  return (
    <>
    <FormToDo addToDo={addToDo} />
    <SearchForm onSubmit={handleSearch} />
		<SearchBox onChange={filter} />
    <FormFilterTodo
				setSearchParams={setSearchParams}
				filterText={filterText}
			/>
    {filteredTodoList && (
				<ul className='list-group list-group-flush'>
					{filteredTodoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							handleCheckCompleted={handleCheckCompleted}
							handleDelete={handleDelete}
						/>
					))}
				</ul>
			)}
    </>
  )
}

export default ToDoList
