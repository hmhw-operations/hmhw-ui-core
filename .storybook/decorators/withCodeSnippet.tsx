import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeDisplayOptions = {
  hideInDocs?: boolean;
  message?: string;
};

export const withCodeSnippet =
  (code: string, { hideInDocs, message }: CodeDisplayOptions = {}) =>
  (Story, { globals, viewMode }) => {
    if (viewMode === "docs" && hideInDocs) {
      return <Story />;
    }

    const syntaxTheme = globals.theme === "light" ? vs : vscDarkPlus;

    return (
      <div
        style={{
          backgroundColor: "var(--color-surface-canvas)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--size-200)"
        }}
      >
        <Story />
        <div
          style={{
            padding: "var(--size-200)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--size-100)"
          }}
        >
          {message && (
            <p
              style={{
                color: "var(--color-primary)"
              }}
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          )}
          <SyntaxHighlighter language="typescript" style={syntaxTheme}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };
