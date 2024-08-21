import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      parentSelector: "body",
      themes: {
        light: "light-theme",
        dark: "dark-theme",
        contrast: "contrast-theme",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
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

  tags: ["autodocs"],
};

export default preview;
