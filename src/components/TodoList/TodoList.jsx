import React, { useState, useEffect } from 'react';
import Select from '../Select';
import Filter from '../TodoFilter';
import TodoForm from '../TodoForm';
import Todo from '../Todo';
import Modal from '../Modal';
import TodoData from '../../data/todos.json';

function TodoList() {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) ?? TodoData,
  );
  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filterText, setFilterText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    handlerFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    setShowModal(false);
  };

  const removeTodo = id => {
    const deleteTodo = window.confirm('Delete this todo?');

    if (deleteTodo) {
      const removedArr = todos.filter(todo => todo.id !== id);
      setTodos(removedArr);
    }
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    const completeTodos = updatedTodos.filter(({ complete }) => complete);
    const unCompleteTodos = updatedTodos.filter(({ complete }) => !complete);
    const updatedTodosSort = [...unCompleteTodos, ...completeTodos];

    setTodos(updatedTodosSort);
  };

  const editTodo = (id, text) => {
    let editTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  };

  const changeFilter = e => {
    setFilterText(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filterText.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  const handlerFilter = () => {
    switch (status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.complete === true));
        break;

      case 'uncomplete':
        setFilteredTodos(todos.filter(todo => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <>
      <button
        className="btnEditTodo"
        onClick={toggleModal}
        aria-label="open modal todo"
      >
        Press add todo
      </button>
      <Filter value={filterText} onChange={changeFilter} />

      <Select statusHandler={statusHandler} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoForm onSubmit={addTodo} />
        </Modal>
      )}

      <Todo
        todos={filterText ? getVisibleTodos() : filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleEditChange={handleEditChange}
        editId={editId}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
}

export default TodoList;
