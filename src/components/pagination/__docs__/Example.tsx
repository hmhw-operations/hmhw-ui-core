import React, { FC, useEffect } from "react";
import Pagination, { PaginationProps } from "../Pagination";

const backgroundColors: string[] = [
  "var(--color-surface-primary)",
  "var(--color-surface-neutral)",
  "var(--color-surface-neutral-hover)",
  "var(--color-surface-neutral-disabled)",
  "var(--color-surface-interactive)",
  "var(--color-surface-interactive-hover)",
  "var(--color-surface-interactive-active)",
  "var(--color-surface-interactive-disabled)",
  "var(--color-surface-interactive-secondary)",
  "var(--color-surface-interactive-secondary-hover)",
  "var(--color-surface-interactive-secondary-active)",
  "var(--color-surface-interactive-secondary-disabled)",
  "var(--color-on-accent)",
  "var(--color-on-disabled)",
  "var(--color-on-interactive)",
  "var(--color-on-interactive-secondary)",
];

const codeDisplay = `const [pageNr, setPageNr] = React.useState(currentPage);

const handlePageChange = (page: number) => {
    setPageNr(page);
    console.log("Page changed to:", page)
  };

useEffect(() => {
  if (currentPage <= totalPages && currentPage > 0) {
    setPageNr(currentPage);
  }
}, [currentPage]);
`;

const Example: FC<PaginationProps> = ({
  onPageChange,
  totalPages,
  currentPage,
  skipMode,
  size,
  showMaxCount,
}) => {
  const [pageNr, setPageNr] = React.useState(currentPage);

  const handlePageChange = (page: number) => {
    setPageNr(page);
    console.log("Page changed to:", page);
  };

  useEffect(() => {
    if (currentPage <= totalPages && currentPage > 0) {
      setPageNr(currentPage);
    }
  }, [currentPage]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "var(--color-primary)",
        backgroundColor: "var(--color-surface-canvas)",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      <h1>Pagination</h1>
      <p style={{ textAlign: "center" }}>
        Pagination is a <i>controlled</i> UI component used to divide content
        across multiple pages.
        <br />
        The counter is controlled by the code below the example.
      </p>

      <div
        style={{
          backgroundColor: backgroundColors[pageNr - 1],
          padding: "5rem",
        }}
      >
        Page {pageNr}
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={pageNr}
        skipMode={skipMode}
        size={size}
        showMaxCount={showMaxCount}
      />

      <pre
        style={{
          backgroundColor: "var(--color-surface-neutral-disabled)",
          padding: "1rem",
          width: "100%",
        }}
      >
        {codeDisplay}
      </pre>
    </div>
  );
};

export default Example;
