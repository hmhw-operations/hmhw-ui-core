import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    backgrounds: {
      disable: true,
      // default: "Dark ocean",
      // values: [
      //   {
      //     name: "Dark ocean",
      //     value: "#041B25",
      //   },
      //   {
      //     name: "Light",
      //     value: "#eee",
      //   },
      // ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
