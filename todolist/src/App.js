import styles from "./App.module.css";
import { useState } from "react";
import { User } from "./User.js";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newTodoList);
  };
  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <div className={styles.center}>
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className={styles.list}>
        {todoList.map((task) => {
          return (
            <div className={styles.flex}>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
