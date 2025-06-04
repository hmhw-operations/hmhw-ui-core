import type { Meta, StoryObj } from "@storybook/react";
import Table, { createColumnHelper } from "../Table"; // Updated import
import IconButton from "../../iconbutton/IconButton"; // Import IconButton

// Define the shape of the data for the story
interface StoryData {
  queueId: string;
  scriptName: string;
  submittedBy: string;
  submittedDate: string;
  status: string;
  result: string;
  duration: string;
}

const meta: Meta<typeof Table<StoryData>> = {
  title: "Table",
  component: Table
};

export default meta;
type Story = StoryObj<typeof Table<StoryData>>;

// Define data for the story
const data: StoryData[] = [
  {
    queueId: "1",
    scriptName: "Script A",
    submittedBy: "User 1",
    submittedDate: "2023-10-01",
    status: "Completed",
    result: "Success",
    duration: "5m"
  },
  {
    queueId: "2",
    scriptName: "Script B",
    submittedBy: "User 2",
    submittedDate: "2023-10-02",
    status: "Failed",
    result: "Error",
    duration: "3m"
  }
  // Add more data as needed
];

// Define columns for the story
const columnHelper = createColumnHelper<StoryData>();

const columns = [
  columnHelper.accessor("queueId", {
    header: "Queue ID",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("scriptName", {
    header: "Script Name",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("submittedBy", {
    header: "Submitted By",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("submittedDate", {
    header: "Submitted Date",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => info.getValue()
  }),
  // Add a new display column for the context menu
  columnHelper.display({
    id: "actions", // Unique ID for the column
    header: "Actions", // Optional header for the column
    cell: (info) => (
      <IconButton
        id={`action-button-${info.row.id}`}
        title="Actions"
        label="Actions" // Accessible label
        icon="more-horizontal" // Valid SvgName
        variant="secondary"
        size="small"
        onClick={() => {
          // Placeholder for MenuList integration
          console.log("Context menu clicked for row:", info.row.original);
        }}
      />
    )
  })
];

export const Default: Story = {
  args: {
    data,
    columns // Pass columns to the Table component
  }
};
