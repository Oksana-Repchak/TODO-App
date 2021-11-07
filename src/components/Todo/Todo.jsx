import React from 'react';
import '../TodoList/TodoList.scss';

import { FaWindowClose, FaRegEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue,
}) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li className="todoItem" key={todo.id}>
          {editId === todo.id ? (
            <>
              <textarea
                className="todoEditText"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                name="text"
              ></textarea>
              <button
                className="btnEditTodo"
                onClick={() => editTodo(todo.id, inputValue)}
              >
                Edit todo
              </button>
            </>
          ) : (
            <>
              <p
                className={todo.complete ? 'complete' : ''}
                onClick={() => completeTodo(todo.id)}
              >
                {todo.text}
              </p>
              <p className="todoTime">{todo.time}</p>

              <div className="btnWrapper">
                <IconContext.Provider
                  value={{ color: 'red', className: 'iconDelete' }}
                >
                  <FaWindowClose onClick={() => removeTodo(todo.id)} />
                </IconContext.Provider>

                <IconContext.Provider value={{ color: 'orange' }}>
                  <FaRegEdit
                    onClick={() => handleEditChange(todo.id, todo.text)}
                  />
                </IconContext.Provider>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todo;
