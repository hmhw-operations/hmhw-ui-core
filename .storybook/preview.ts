import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

// ------------------------------------------------------------------
// LEGG TIL DINE GLOBALE CSS-IMPORTER HER
// Sjekk at banen er riktig fra .storybook/ til src/styles/
// ------------------------------------------------------------------
import "../src/styles/globals.css";
import "../src/styles/palette.css";
import "../src/styles/tokens.css";
import "../src/styles/variables.css";
import "../src/styles/components.css"; // <-- Din nye fil
// ------------------------------------------------------------------

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      parentSelector: "body",
      themes: {
        dark: "dark-theme",
        day: "day-theme"
      },
      defaultTheme: "day"
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
  },

  tags: ["autodocs"]
};

export default preview;
