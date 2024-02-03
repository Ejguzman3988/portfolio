import { Todo } from "@/app/(types)/interfaces";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className={todo.completed ? "todo completed" : "todo"}>
      <div className="content">{todo.content}</div>
      <div className="details">
        <span>Created At: {todo.createdAt.toLocaleString()}</span>
        <span>Updated At: {todo.updatedAt.toLocaleString()}</span>
      </div>
    </li>
  );
};

export default TodoItem;
