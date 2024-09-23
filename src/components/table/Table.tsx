import React, { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import Icon from "../icon/Icon";

import style from "./table.module.css";

interface Data {
  /** @format int32 */
  queueId?: number;
  /** @format int32 */
  scriptId?: number;
  scriptName?: string | null;
  submittedBy?: string | null;
  /** @format date-time */
  submitted?: string;
  status?: string | null;
  result?: string | null;
  /** @format int32 */
  durationSeconds?: number | null;
}

const mockData: Data[] = [
  {
    queueId: 1,
    scriptName: "Script A",
    submittedBy: "User 1",
    submitted: "2023-10-01T00:00:00Z",
    status: "Completed",
    result: "Success",
    durationSeconds: 300,
  },
  {
    queueId: 2,
    scriptId: 102,
    scriptName: "Script B",
    submittedBy: "User 2",
    submitted: "2023-10-02T00:00:00Z",
    status: "Failed",
    result: "Error",
    durationSeconds: 180,
  },
  {
    queueId: 3,
    scriptId: 103,
    scriptName: "Script C",
    submittedBy: "User 3",
    submitted: "2023-10-03T00:00:00Z",
    status: "In Progress",
    result: "Pending",
    durationSeconds: 600,
  },
  {
    queueId: 4,
    scriptId: 104,
    scriptName: "Script D",
    submittedBy: "User 4",
    submitted: "2023-10-04T00:00:00Z",
    status: "Completed",
    result: "Success",
    durationSeconds: 420,
  },
  {
    queueId: 5,
    scriptId: 105,
    scriptName: "Script E",
    submittedBy: "User 5",
    submitted: "2023-10-05T00:00:00Z",
    status: "Failed",
    result: "Error",
    durationSeconds: 120,
  },
];

const columnHelper = createColumnHelper<Data>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, ".");
};

const formatDuration = (seconds: number | null) => {
  if (seconds === null) return "";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = "";
  if (hours > 0) result += `${hours}hr `;
  if (minutes > 0) result += `${minutes}m `;
  if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) result += `${remainingSeconds}s`;

  return result.trim();
};

const columns = [
  columnHelper.accessor("queueId", { header: "Queue ID", cell: (info) => info.getValue() }),
  columnHelper.accessor("scriptName", {
    header: "Script name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("submittedBy", {
    header: "Submitted by",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("submitted", {
    header: "Submitted date",
    cell: (info) => formatDate(info.getValue() || ""),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("durationSeconds", {
    header: "Duration",
    cell: (info) => formatDuration(info.getValue() || 0),
  }),
  columnHelper.accessor("queueId", { header: "Report", cell: () => <Icon name="download" size="small" /> }),
];

const Table: React.FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: mockData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <table className={`${style.table}`}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                <span className="sort-indicator">
                  {{
                    asc: "↑",
                    desc: "↓",
                  }[header.column.getIsSorted() as string] ?? null}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={cell.column.id === "status" ? (cell.getValue() as string) : ""}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
