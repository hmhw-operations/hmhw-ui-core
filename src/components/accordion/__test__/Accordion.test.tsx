//Button/__test__/Button.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Accordion from "../Accordion";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Accordion text="Hello" />);

    const accordion = screen.getByText("I am an accordion ... Hello");
    expect(accordion).toBeInTheDocument();
  });
});
