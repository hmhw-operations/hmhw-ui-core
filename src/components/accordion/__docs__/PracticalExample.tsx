import React, { FC } from "react";
import Accordion, { AccordionItem } from "../Accordion";

const PracticalExample: FC = () => {
  const generalSettings: AccordionItem[] = [
    {
      label: "Account Settings",
      content: (
        <div style={{ padding: "0.5rem 0" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Display Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--color-border-default)",
                borderRadius: "4px",
                background: "var(--color-background-default)"
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email Notifications</label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input type="checkbox" defaultChecked />
              <span>Receive email updates</span>
            </label>
          </div>
        </div>
      )
    },
    {
      label: "Privacy Settings",
      content: (
        <div style={{ padding: "0.5rem 0" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <input type="checkbox" defaultChecked />
              <span>Make profile public</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <input type="checkbox" />
              <span>Allow search engines to index profile</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input type="checkbox" defaultChecked />
              <span>Enable two-factor authentication</span>
            </label>
          </div>
        </div>
      )
    }
  ];

  const appearanceSettings: AccordionItem[] = [
    {
      label: "Theme Settings",
      content: (
        <div style={{ padding: "0.5rem 0" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Color Theme</label>
            <select
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--color-border-default)",
                borderRadius: "4px",
                background: "var(--color-background-default)"
              }}
            >
              <option value="auto">Auto (System)</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Font Size</label>
            <input type="range" min="12" max="18" defaultValue="14" style={{ width: "100%" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8em", color: "var(--color-foreground-secondary)" }}>
              <span>Small</span>
              <span>Large</span>
            </div>
          </div>
        </div>
      )
    },
    {
      label: "Layout Preferences",
      content: (
        <div style={{ padding: "0.5rem 0" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <input type="checkbox" defaultChecked />
            <span>Compact mode</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <input type="checkbox" />
            <span>Show sidebar by default</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" defaultChecked />
            <span>Enable animations</span>
          </label>
        </div>
      )
    }
  ];

  // Help/FAQ section - independent accordions
  const helpItems: AccordionItem[] = [
    {
      label: "How do I reset my password?",
      content: (
        <div>
          <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
            To reset your password, click on &ldquo;Forgot Password&rdquo; on the login page, enter your email address, and follow the instructions sent to your email.
          </p>
          <div
            style={{
              background: "var(--color-system-info-weak)",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid var(--color-system-info-default)"
            }}
          >
            <strong>Note:</strong> Password reset links expire after 24 hours for security purposes.
          </div>
        </div>
      )
    },
    {
      label: "Can I have multiple accounts?",
      content: (
        <div>
          <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
            Yes, you can have multiple accounts using different email addresses. However, each account maintains separate data and settings.
          </p>
          <ul style={{ marginLeft: "1.5rem", lineHeight: 1.6 }}>
            <li>Each account requires a unique email address</li>
            <li>Data is not shared between accounts</li>
            <li>You&apos;ll need to log in separately to each account</li>
          </ul>
        </div>
      )
    },
    {
      label: "How do I export my data?",
      content: (
        <div>
          <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>You can export your data from the Settings page under &ldquo;Data &amp; Privacy&rdquo; section.</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--color-system-info-default)",
                borderRadius: "4px",
                background: "var(--color-system-info-default)",
                color: "white",
                cursor: "pointer"
              }}
            >
              Export Data
            </button>
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid var(--color-border-default)",
                borderRadius: "4px",
                background: "var(--color-background-default)",
                cursor: "pointer"
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: "0 0 0.5rem 0", color: "var(--color-foreground-primary)" }}>Settings Dashboard</h2>
        <p style={{ color: "var(--color-foreground-secondary)", lineHeight: 1.5 }}>
          A practical example showing how accordions can be used in a settings interface with different grouping strategies.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
        <div>
          <h3
            style={{
              margin: "0 0 1rem 0",
              color: "var(--color-system-info-default)",
              fontSize: "1.1em"
            }}
          >
            General Settings
          </h3>
          <p
            style={{
              fontSize: "0.9em",
              color: "var(--color-foreground-secondary)",
              marginBottom: "1rem"
            }}
          >
            Grouped: Only one section open at a time
          </p>
          <Accordion items={generalSettings} size="medium" groupId="general-settings" />
        </div>

        <div>
          <h3
            style={{
              margin: "0 0 1rem 0",
              color: "var(--color-system-success-default)",
              fontSize: "1.1em"
            }}
          >
            Appearance Settings
          </h3>
          <p
            style={{
              fontSize: "0.9em",
              color: "var(--color-foreground-secondary)",
              marginBottom: "1rem"
            }}
          >
            Grouped: Independent from general settings
          </p>
          <Accordion items={appearanceSettings} size="medium" groupId="appearance-settings" />
        </div>
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 1rem 0",
            color: "var(--color-system-warning-default)",
            fontSize: "1.1em"
          }}
        >
          Help & FAQ
        </h3>
        <p
          style={{
            fontSize: "0.9em",
            color: "var(--color-foreground-secondary)",
            marginBottom: "1rem"
          }}
        >
          Ungrouped: Multiple items can be open simultaneously for easy reference
        </p>
        <Accordion items={helpItems} size="medium" />
      </div>

      <div
        style={{
          marginTop: "3rem",
          background: "var(--color-background-weak)",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid var(--color-border-weak)"
        }}
      >
        <h4 style={{ margin: "0 0 1rem 0" }}>Design Patterns Demonstrated:</h4>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", lineHeight: 1.6 }}>
          <li>
            <strong>Settings Sections:</strong> Use groups when only one configuration area should be active
          </li>
          <li>
            <strong>Cross-Category Independence:</strong> Different setting categories can be open simultaneously
          </li>
          <li>
            <strong>Reference Information:</strong> FAQ items are ungrouped for easy cross-referencing
          </li>
          <li>
            <strong>Interactive Content:</strong> Form elements and buttons work seamlessly within accordion content
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PracticalExample;
