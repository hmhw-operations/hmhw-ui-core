import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      parentSelector: "body",
      themes: {
        dark: "dark-theme",
        light: "light-theme",
        day: "day-theme"
      },
      defaultTheme: "dark"
    })
  ],

  parameters: {
    backgrounds: {
      disable: true
    },
    options: {
      //Sort alphabetically
      storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }))
    }
    // backgrounds: {
    //   default: "Dark ocean",
    //   values: [
    //     {
    //       name: "Dark ocean",
    //       value: "#041B25",
    //     },
    //     {
    //       name: "Light",
    //       value: "#eee",
    //     },
    //   ],
    // },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/i,
    //   },
    // },
  },

  tags: ["autodocs"]
};

export default preview;
