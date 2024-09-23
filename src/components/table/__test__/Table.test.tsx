import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../Table";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom"; // Add this import

const data = [
  {
    queueId: "1",
    scriptName: "Script A",
    submittedBy: "User 1",
    submittedDate: "2023-10-01",
    status: "Completed",
    result: "Success",
    duration: "5m",
  },
  {
    queueId: "2",
    scriptName: "Script B",
    submittedBy: "User 2",
    submittedDate: "2023-10-02",
    status: "Failed",
    result: "Error",
    duration: "3m",
  },
];

test("renders table with data", () => {
  render(<Table />);
  expect(screen.getByText("Queue ID")).toBeInTheDocument();
  expect(screen.getByText("Script A")).toBeInTheDocument();
  expect(screen.getByText("User 1")).toBeInTheDocument();
});
