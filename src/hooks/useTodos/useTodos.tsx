import axios from "axios";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

import useTodosStore from "../../zustand/useTodosStore";

const useTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [reloadProducts, setReloadProducts] = useState(false);

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
  }, [initTodos, reloadProducts]);

  return { isLoading, todos, error, activeTodos, setReloadProducts };
};

export default useTodos;
