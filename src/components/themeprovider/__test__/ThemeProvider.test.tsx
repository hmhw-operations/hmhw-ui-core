//ThemeProvider/__test__/ThemeProvider.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeProvider from "../Theme";

describe("ThemeProvider component", () => {
  it("ThemeProvider should render correctly", () => {
    render(<ThemeProvider />);
    // Add appropriate test assertions here
  });
});
