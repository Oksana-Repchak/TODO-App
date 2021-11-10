import './HomeView.scss';
import todoList from '../../images/todoList.jpg'; // relative path to image

export default function HomeView() {
  return (
    <>
      <h1 className="textHome">
        Welcome! <br /> App for creation a task!
      </h1>
      <img src={todoList} alt="todo list" className="image" />
    </>
  );
}
