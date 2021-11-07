import React, { useState } from 'react';
import IconButton from '../IconButton';
import shortid from 'shortid';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import './TodoForm.scss';
import getTime from '../Time/Time';

function TodoForm(props) {
  const [text, setText] = useState('');
  const [time, setTime] = useState(() => getTime());

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: shortid.generate(),
      text,
      time,
      complete: false,
    });
    setText('');
    setTime('');
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="todoFormInput">
        <textarea
          placeholder="todo..."
          className="todoText"
          value={text}
          onChange={handleChange}
          name="text"
        ></textarea>
        <p>{time}</p>
      </div>

      <IconButton onClick={handleSubmit} aria-label="add todo">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
    </form>
  );
}

export default TodoForm;
