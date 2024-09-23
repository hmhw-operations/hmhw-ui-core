import React from "react";
import Table from "../Table";

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
  // Add more data as needed
];

const Example: React.FC = () => {
  return <Table data={data} />;
};

export default Example;
