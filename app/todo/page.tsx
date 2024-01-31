interface todo {
  id: number;
  content: string;
  completed: boolean;
  order: null | number;
  createdAt: Date;
  updatedAt: Date;
}

async function getTodos(): Promise<todo[]> {
  const res = await fetch("http://localhost:8080/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

const Todo = async () => {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todo:</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id + t.content.slice(0, 2)}>{t.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
