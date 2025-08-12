import { useState } from "react";
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import style from "./table.module.css";
import { Size } from "../../types";

// Define Props for the generic table
interface TableProps<TData> {
  data: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[]; // Use ColumnDef with the generic type
  size?: Size;
}

// Re-export createColumnHelper
export { createColumnHelper };

const Table = <TData extends object>({ data, columns, size = "medium" }: TableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data, // Use data from props
    columns, // Use columns from props
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  return (
    <table className={`${style.table} ${style[size]}`}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                <span className="sort-indicator">
                  {{
                    asc: "↑",
                    desc: "↓"
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
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
