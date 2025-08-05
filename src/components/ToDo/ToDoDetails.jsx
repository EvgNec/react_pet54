import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ToDo from './ToDo';
import { nanoid } from 'nanoid';
import SearchForm from 'components/service/SearchForm/SearchForm';

const ToDoDetails = () => {
  const params = useParams();
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };
  const handleDelete = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(todo => todo.id !== id);
    });

    toast.error('Delete successfully');
  };

  const addToDo = value => {
    setTodoList(prevTodoList => {
      return [
        ...prevTodoList,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });
console.log('todoList',todoList);
    toast.success('Create successfully');
  };
  return (
    <>
      <h1>My To-Do list</h1>
	  <SearchForm onSubmit={addToDo} />
      {todoList.map(todo => (
        <ToDo
          key={todo.id}
          todo={todo}
          handleCheckCompleted={handleCheckCompleted}
          handleDelete={handleDelete}
        />
      ))}

      {/* {todoList?.map(
        todo =>
          todo.id === params.id && 
		  (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          )
      )} */}
    </>
  );
};

export default ToDoDetails;
