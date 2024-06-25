import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Dark ocean",
      values: [
        {
          name: "Dark ocean",
          value: "#041B25",
        },
        {
          name: "Light",
          value: "#eee",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
