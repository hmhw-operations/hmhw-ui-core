import { sanitizeForId } from "../index";

describe("sanitizeForId", () => {
  it("should remove special characters and spaces from a string", () => {
    const input = "Hello, World!";
    const expectedOutput = "hello-world";
    const result = sanitizeForId(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle empty strings", () => {
    const input = "";
    const expectedOutput = "";
    const result = sanitizeForId(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle strings with only special characters and spaces", () => {
    const input = "!@#$%^&*() ";
    const expectedOutput = "";
    const result = sanitizeForId(input);
    expect(result).toBe(expectedOutput);
  });

  it("should handle strings with leading and trailing spaces", () => {
    const input = "  Hello, World!  ";
    const expectedOutput = "hello-world";
    const result = sanitizeForId(input);
    expect(result).toBe(expectedOutput);
  });
});
