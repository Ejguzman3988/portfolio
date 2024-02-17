"use client";

import { Todo } from "@/app/(types)/interfaces";
import { useEffect, useRef, useState } from "react";

interface FormDataTodo {
  content: string;
  completed: boolean;
  order: number | null;
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [formData, setFormData] = useState<FormDataTodo>({
    content: "",
    completed: false,
    order: null,
  });

  const todoRef = useRef<HTMLLIElement>(null);

  const [update, setUpdate] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  useEffect(() => {
    if (todo) {
      setFormData({
        content: todo.content,
        completed: todo.completed,
        order: todo.order,
      });
    }
  }, [todo]);

  return (
    <li
      className={todo.completed ? "todo completed" : "todo"}
      onClick={(e) => {
        e.currentTarget.classList.add("active");
        setUpdate(true);
      }}
      ref={todoRef}
    >
      {update ? (
        <input
          name="content"
          className="form-content"
          value={formData.content}
          onChange={handleChange}
        />
      ) : (
        <div className="content">{todo.content}</div>
      )}
      <div className="details">
        <span className="created_at">
          Created At: {todo.createdAt.toLocaleString()}
        </span>
        <span className="updated_at">
          Updated At: {todo.updatedAt.toLocaleString()}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
