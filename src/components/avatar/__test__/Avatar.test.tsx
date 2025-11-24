import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Avatar from "../Avatar";

describe("Avatar component", () => {
  it("Avatar should render correctly with image", () => {
    render(<Avatar src="test.jpg" name="John Doe" />);
    const img = screen.getByAltText("Avatar for John Doe");
    expect(img).toBeInTheDocument();
  });

  it("Avatar should extract initials from full name", () => {
    render(<Avatar name="John Doe" />);
    const initials = screen.getByText("JD");
    expect(initials).toBeInTheDocument();
  });

  it("Avatar should extract initials from single name", () => {
    render(<Avatar name="Madonna" />);
    const initials = screen.getByText("MA");
    expect(initials).toBeInTheDocument();
  });

  it("Avatar should extract initials from name with more than 2 parts", () => {
    render(<Avatar name="John Michael Doe" />);
    const initials = screen.getByText("JD");
    expect(initials).toBeInTheDocument();
  });

  it("Avatar should show fallback when no name provided", () => {
    render(<Avatar />);
    const fallback = screen.getByText("?");
    expect(fallback).toBeInTheDocument();
  });

  it("Avatar should show fallback for empty string name", () => {
    render(<Avatar name="" />);
    const fallback = screen.getByText("?");
    expect(fallback).toBeInTheDocument();
  });

  it("Avatar should show fallback for whitespace-only name", () => {
    render(<Avatar name="   " />);
    const fallback = screen.getByText("?");
    expect(fallback).toBeInTheDocument();
  });

  it("Avatar should show image when both src and name provided", () => {
    render(<Avatar src="test.jpg" name="John Doe" />);
    const img = screen.getByAltText("Avatar for John Doe");
    expect(img).toBeInTheDocument();
    expect(screen.queryByText("JD")).not.toBeInTheDocument();
  });

  it("Avatar should set title attribute on initials", () => {
    render(<Avatar name="John Doe" />);
    const initialsSpan = screen.getByText("JD");
    expect(initialsSpan).toHaveAttribute("title", "John Doe");
  });
});
