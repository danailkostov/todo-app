import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for better assertion messages

import AddTask from "./AddTask";

// Mocking the Zustand hook
jest.mock("../../zustand/useTodosStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("AddTask component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Add button by default", () => {
    const { getByText } = render(<AddTask />);
    expect(getByText("Add")).toBeInTheDocument();
  });

  it("toggles AddTaskModal when Add button is clicked", () => {
    const { getByText } = render(<AddTask />);
    fireEvent.click(getByText("Add"));
    expect(getByText("Add Task")).toBeInTheDocument(); // Assuming AddTaskModal renders this text
  });

  it("renders AddTaskModal when addTask state is true", () => {
    jest.mock("../../zustand/useTodosStore", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        toggleAddTask: jest.fn(),
        addTask: true,
      })),
    }));

    const { queryByText } = render(<AddTask />);
    expect(queryByText("Add")).not.toBeInTheDocument();
    expect(queryByText("Add Task")).toBeInTheDocument();
  });
});
