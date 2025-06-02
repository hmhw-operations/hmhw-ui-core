import { useState } from "react";
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import style from "./table.module.css";

// Define Props for the generic table
interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[]; // Use ColumnDef with the generic type
}

// Re-export createColumnHelper
export { createColumnHelper };

const Table = <TData extends object>({ data, columns }: TableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data, // Use data from props
    columns, // Use columns from props
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
              <td key={cell.id}>
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
