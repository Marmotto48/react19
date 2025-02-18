import "./App.css";
import { useOptimistic, useActionState } from "react";

function App() {
  // states
  const [data, formAction, pending] = useActionState(addTodo, []);
  const [opTodoList, setOpTodoList] = useOptimistic(
    data,
    // callback function
    (prevTodos, newTodo) => [...prevTodos, { text: newTodo, pending: true }]
  );

  console.log("data", data);
  async function addTodo(prevState, formData) {
    const newTodo = formData.get("todo");
    setOpTodoList(newTodo);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [...prevState, { text: newTodo, pending: false }];
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>useOptimistic Hook</h2>
      <form action={formAction}>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="add to do..."
          required
        />
        <button disabled={pending} type="submit">
          {pending ? "adding ..." : "add +"}
        </button>
      </form>
      <ul>
        {opTodoList?.map((item, index) => {
          return (
            <li key={index}>
              {item.text}
              {item.pending && <span>Adding...</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
