import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContextMenu from "../ContextMenu";
import MenuList from "../../menulist/MenuList";

describe("ContextMenu", () => {
  const renderContextMenuWithItems = (onSelect = vi.fn()) => {
    return render(
      <ContextMenu onSelect={onSelect}>
        <ContextMenu.Trigger>Test Trigger</ContextMenu.Trigger>
        <ContextMenu.Content>
          <MenuList.Item name="copy">Copy</MenuList.Item>
          <MenuList.Item name="edit">Edit</MenuList.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
  };

  it("renders trigger element", () => {
    renderContextMenuWithItems();
    expect(screen.getByText("Test Trigger")).toBeDefined();
  });

  it("shows menu content when trigger is clicked", () => {
    renderContextMenuWithItems();

    const trigger = screen.getByText("Test Trigger");
    fireEvent.click(trigger);

    expect(screen.getByText("Copy")).toBeDefined();
    expect(screen.getByText("Edit")).toBeDefined();
  });

  it("shows menu content when trigger is right-clicked", () => {
    renderContextMenuWithItems();

    const trigger = screen.getByText("Test Trigger");
    fireEvent.contextMenu(trigger);

    expect(screen.getByText("Copy")).toBeDefined();
    expect(screen.getByText("Edit")).toBeDefined();
  });

  it("calls onSelect when menu item is clicked", () => {
    const mockOnSelect = vi.fn();
    renderContextMenuWithItems(mockOnSelect);

    const trigger = screen.getByText("Test Trigger");
    fireEvent.click(trigger);

    const copyItem = screen.getByText("Copy");
    fireEvent.click(copyItem);

    expect(mockOnSelect).toHaveBeenCalledWith("copy");
  });

  it("closes menu after item selection", () => {
    renderContextMenuWithItems();

    const trigger = screen.getByText("Test Trigger");
    fireEvent.click(trigger);

    const copyItem = screen.getByText("Copy");
    fireEvent.click(copyItem);

    expect(screen.queryByText("Copy")).toBeNull();
  });
});
