import { Suspense } from "react";
import TodoList from "./(components)/TodoList";
import { revalidatePath } from "next/cache";

const Page = () => {
  return (
    <div>
      <h1>Todo:</h1>
      <Suspense fallback={<p>Getting todos...</p>}>
        <TodoList />
      </Suspense>
    </div>
  );
};

export default Page;
