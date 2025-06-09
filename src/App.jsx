import { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const handleTodos = () => {
    if (todo.length != 0) {
      setTodos((prev) => [...prev, todo]);
      setTodo("");
    }
  };
  return (
    <>
      <div>
        <main className="container " style={{ marginTop: 40 }}>
          <header>
            <h1>Todo App</h1>
          </header>
          <section>
            <h2>Add New Todo</h2>
            <div className="grid">
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Enter your todo..."
                aria-label="Todo input"
              />
              <button onClick={handleTodos}>Add Todo</button>
            </div>
          </section>

          <section>
            <h2>Added Todos</h2>
            <ul>
              {todos.map((todo, key) => (
                <li>
                  <div className="grid">
                    <div>
                      <strong>
                        {key + 1}. {todo}
                      </strong>
                    </div>
                    <div>
                      <button className="secondary outline">Completed</button>
                    </div>
                  </div>
                </li>
              ))}
              <li>
                <div className="grid">
                  <div>
                    <strong>2. Todo2</strong>
                  </div>
                  <div>
                    <button>Mark As Completed</button>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
