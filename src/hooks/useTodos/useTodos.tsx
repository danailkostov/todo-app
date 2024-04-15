import axios from "axios";
import { useEffect, useState } from "react";
// import { Todo } from "./useTodos.types";
import useTodosStore from "../../zustand/useTodosStore";
import { useShallow } from "zustand/react/shallow";

const useTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { todos, initTodos, activeTodos } = useTodosStore(
    useShallow(({ todos, initTodos, activeTodos }) => ({
      todos,
      initTodos,
      activeTodos,
    }))
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => initTodos(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [initTodos]);

  return { isLoading, todos, error, activeTodos };
};

export default useTodos;
