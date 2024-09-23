import type { Meta, StoryObj } from "@storybook/react";
import Table from "../Table";

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

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

export const Default: Story = {
  args: {
    data,
  },
};
