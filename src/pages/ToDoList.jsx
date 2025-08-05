import SearchBox from 'components/service/Search/SearchBox/SearchBox'
import SearchForm from 'components/service/SearchForm/SearchForm'
import ToDo from 'components/ToDo/ToDo'
import React from 'react'
import { useState } from 'react'

const ToDoList = () => {
  const {todo, setTodo} = useState('')
  const [searchText, setSearchText] = useState('');
  const [searchText2, setSearchText2] = useState('');

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
    <SearchForm onSubmit={handleSearch} />
		<SearchBox onChange={filter} />
    </>
  )
}

export default ToDoList
