import React from "react";
import { Theme, ThemeProvider, useTheme } from "../Theme";
import Select from "../../select/Select";

const Example = (props: any) => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <h1>Theme Provider Example</h1>
        <p>
          The theme provider controls the current theme applied to the body tag
          of the application
        </p>
        <p>
          Use the <code>useTheme()</code> hook and the <code>Theme</code> type
          to manage or change the theme.
        </p>
        <p>The <code>Theme</code> type contains the following theme names:</p>
        <ul>
          {Object.values(Theme).map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
      <ThemeProvider {...props}>
        <ConsumerComponent />
      </ThemeProvider>
    </div>
  );
};

const ConsumerComponent = () => {
  const { theme, setTheme } = useTheme();

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
  );
};

export default Example;
