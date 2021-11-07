const selectOption = ({ statusHandler }) => {
  return (
    <div>
      <select className="select" onChange={statusHandler} name="todos">
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="uncomplete">Uncomplete</option>
      </select>
    </div>
  );
};
export default selectOption;
