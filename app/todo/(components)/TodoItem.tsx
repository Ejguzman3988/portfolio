import { Todo } from "@/app/(types)/interfaces";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return <li>{todo.content}</li>;
};

export default TodoItem;
