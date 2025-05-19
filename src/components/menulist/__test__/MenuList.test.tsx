import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuList from "../MenuList";

describe("MenuList", () => {
  it("renders all menu items", () => {
    const items = [
      { label: "Item 1" },
      { label: "Item 2" },
    ];
    render(<MenuList items={items} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("calls onClick when item is clicked", () => {
    const onClick = vi.fn();
    const items = [{ label: "Clickable", onClick }];
    render(<MenuList items={items} />);
    fireEvent.click(screen.getByText("Clickable"));
    expect(onClick).toHaveBeenCalled();
  });
});
