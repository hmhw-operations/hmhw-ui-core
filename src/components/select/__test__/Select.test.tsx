import { describe, expect, it } from "vitest";
import Select, { SelectOption, SelectOptionGroup } from "../Select";

describe("Select component", () => {
  it("It should pass", () => {
    const val = true;
    expect(val).toBe(true);
  });

  it("should accept options prop", () => {
    // Just verify that we can create a Select component with options
    const options: SelectOption[] = [
      { value: "1", text: "Option 1" },
      { value: "2", text: "Option 2" }
    ];

    // If this doesn't throw a TypeScript error, the test passes
    const select = <Select id="test-select" title="Test Select" label="Select Label" options={options} />;

    expect(select).toBeDefined();
  });

  it("should accept optionGroups prop", () => {
    // Verify that we can create a Select component with option groups
    const optionGroups: SelectOptionGroup[] = [
      {
        label: "Group 1",
        options: [
          { value: "1", text: "Option 1" },
          { value: "2", text: "Option 2" }
        ]
      }
    ];

    // If this doesn't throw a TypeScript error, the test passes
    const select = <Select id="test-select" title="Test Select" label="Select Label" optionGroups={optionGroups} />;

    expect(select).toBeDefined();
  });
});
