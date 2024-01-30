import React from "react";

const page = () => {
  const todos = [
    "make todos objects",
    "create pseudo backend for todos - start w/ db.json",
    "style todo page",
    "Create navbar",
    "Add transition to TODO page",
    "Create ChangeLog",
    "Add Styling for todo list",
    "reverse this list",
    "Research change log and follow style for this list",
    "strike through todos",
    "consider adding commits instead of actual todos",
    "Create Zustand store to set up theming",
    "Add theme light/dark",
    "Create button for theme",
    "Look into fonts",
    "Consider color schemes",
    "revisit homepage",
  ];

  return (
    <div>
      <h1>Todo:</h1>
      <ul>
        {todos.map((t, idx) => (
          <li key={idx + t.slice(0, 2)}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
