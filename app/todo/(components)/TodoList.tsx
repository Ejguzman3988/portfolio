import { Todo } from "../../(types)/interfaces";
import TodoItem from "./TodoItem";
import { fakeDelay } from "@/lib/utils/serverActions";

async function getTodos(): Promise<Todo[]> {
  //const res = await fakeDelay(3000)(
  const res = await fetch("http://localhost:8080/todos", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  const resp = data.map((obj: Todo) => ({
    ...obj,
    createdAt: new Date(obj.createdAt),
    updatedAt: new Date(obj.updatedAt),
  }));

  return resp;
}
const TodoList = async () => {
  const todos = await getTodos();
  return (
    <ul id="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id + todo.content.slice(0, 2)} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
