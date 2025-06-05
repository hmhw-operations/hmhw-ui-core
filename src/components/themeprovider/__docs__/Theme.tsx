import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { withCodeSnippet } from "../../../../.storybook/decorators/withCodeSnippet";

const meta: Meta<typeof Example> = {
  title: "Theme",
  component: Example,
  argTypes: {
    // Add argTypes here as needed
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default args here
  },

  decorators: [
    withCodeSnippet(`const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <Select
        id="theme-select"
        label="Select Theme"
        options={Object.values(Theme).map((theme) => ({
          value: theme,
          text: theme.charAt(0).toUpperCase() + theme.slice(1),
        }))}
        title="Select Theme"
        onChange={(e) => setTheme(e.target.value as Theme)}
      />
      <p style={{ marginTop: "2em" }}>
        Below is the code snippet for this example:
      </p>
    </div>
  );`),
  ],
};
