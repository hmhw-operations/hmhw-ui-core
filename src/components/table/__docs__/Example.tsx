import React from "react";
import Table, { createColumnHelper } from "../Table"; // Updated import
import IconButton from "../../iconbutton/IconButton"; // Import IconButton
import MenuList from "../../menulist/MenuList"; // Import MenuList
// Icon component is used by IconButton internally

// Define the shape of the data
interface ExampleData {
  queueId: string;
  scriptName: string;
  submittedBy: string;
  submittedDate: string;
  status: string;
  result: string;
  duration: string;
}

const data: ExampleData[] = [
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

const columnHelper = createColumnHelper<ExampleData>();

const columns = [
  columnHelper.accessor("queueId", {
    header: "Queue ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("scriptName", {
    header: "Script Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("submittedBy", {
    header: "Submitted By",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("submittedDate", {
    header: "Submitted Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => info.getValue(),
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
        icon="more-vertical" // Valid SvgName
        variant="secondary"
        size="small"
        onClick={() => {
          // Placeholder for MenuList integration
          console.log("Context menu clicked for row:", info.row.original);
          // Example: You might set state here to show a MenuList
          // positioned near this button, passing row data to the MenuList.
        }}
      />
      // Example of how MenuList might be conditionally rendered:
      // {isMenuOpen && info.row.id === activeRowId && (
      //   <MenuList items={[{ id: '1', label: 'Edit' }, { id: '2', label: 'Delete' }]} />
      // )}
    ),
  }),
];

const Example: React.FC = () => {
  return <Table data={data} columns={columns} />;
};

export default Example;
