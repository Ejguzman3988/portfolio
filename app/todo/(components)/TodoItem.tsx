import { Todo } from "@/app/(types)/interfaces";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="content">{todo.content}</div>
      <div className="detail">
        Created At: {todo.createdAt.toLocaleString()} Last Updated:{" "}
        {todo.updatedAt.toLocaleString()}
      </div>
    </li>
  );
};

export default TodoItem;
