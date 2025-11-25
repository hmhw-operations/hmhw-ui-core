import React, { FC } from "react";
import Accordion, { AccordionItem } from "../Accordion";

const CrossGroupExample: FC = () => {
  const groupAItems: AccordionItem[] = [
    {
      label: "Group A - Section 1",
      content: (
        <div>
          <p>This is part of Group A. When you open another item in Group A, this will close automatically.</p>
          <p style={{ color: "var(--color-system-info-default)", fontWeight: "bold" }}>Group ID: &ldquo;group-a&rdquo;</p>
        </div>
      )
    },
    {
      label: "Group A - Section 2",
      content: (
        <div>
          <p>Another item in Group A. Notice how only one item in this group can be open at a time.</p>
          <ul style={{ margin: "0.5rem 0", paddingLeft: "1.5rem" }}>
            <li>Exclusive behavior within group</li>
            <li>Independent from other groups</li>
            <li>Native HTML details/summary functionality</li>
          </ul>
        </div>
      )
    },
    {
      label: "Group A - Section 3",
      content: (
        <div>
          <p>The third item in Group A with some rich content:</p>
          <div style={{ background: "var(--color-background-weak)", padding: "1rem", borderRadius: "4px", margin: "0.5rem 0" }}>
            <h4 style={{ margin: "0 0 0.5rem 0" }}>Code Example</h4>
            <code style={{ display: "block", fontFamily: "monospace", fontSize: "0.9em" }}>{`<Accordion items={items} groupId="group-a" />`}</code>
          </div>
        </div>
      )
    }
  ];

  const groupBItems: AccordionItem[] = [
    {
      label: "Group B - Configuration",
      content: (
        <div>
          <p>This accordion belongs to Group B, completely independent from Group A.</p>
          <p style={{ color: "var(--color-system-success-default)", fontWeight: "bold" }}>Group ID: &ldquo;group-b&rdquo;</p>
          <p>You can have both groups open simultaneously!</p>
        </div>
      )
    },
    {
      label: "Group B - Features",
      content: (
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0" }}>Cross-Group Benefits:</h4>
          <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
            <li>Organize related content separately</li>
            <li>Maintain independent state per group</li>
            <li>Better user experience for complex UIs</li>
            <li>Logical content separation</li>
          </ul>
        </div>
      )
    }
  ];

  const ungroupedItems: AccordionItem[] = [
    {
      label: "Independent Item 1",
      content: (
        <div>
          <p>This accordion has no groupId, so it operates independently.</p>
          <p style={{ color: "var(--color-system-warning-default)", fontWeight: "bold" }}>No Group ID (independent behavior)</p>
        </div>
      )
    },
    {
      label: "Independent Item 2",
      content: (
        <div>
          <p>Another independent accordion. Both ungrouped items can be open simultaneously.</p>
          <p>Perfect for when you want maximum flexibility for users.</p>
        </div>
      )
    }
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: "0 0 1rem 0", color: "var(--color-foreground-primary)" }}>Cross-Group Accordion Examples</h2>
        <p style={{ color: "var(--color-foreground-secondary)", lineHeight: 1.6 }}>
          This example demonstrates how multiple accordion groups can coexist on the same page, each maintaining independent state while allowing cross-group interactions.
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h3
          style={{
            margin: "0 0 1rem 0",
            color: "var(--color-system-info-default)",
            borderBottom: "2px solid var(--color-system-info-default)",
            paddingBottom: "0.5rem"
          }}
        >
          Group A (Exclusive within group)
        </h3>
        <Accordion items={groupAItems} size="medium" groupId="group-a" />
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h3
          style={{
            margin: "0 0 1rem 0",
            color: "var(--color-system-success-default)",
            borderBottom: "2px solid var(--color-system-success-default)",
            paddingBottom: "0.5rem"
          }}
        >
          Group B (Independent from Group A)
        </h3>
        <Accordion items={groupBItems} size="medium" groupId="group-b" />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3
          style={{
            margin: "0 0 1rem 0",
            color: "var(--color-system-warning-default)",
            borderBottom: "2px solid var(--color-system-warning-default)",
            paddingBottom: "0.5rem"
          }}
        >
          Ungrouped Accordions (Fully Independent)
        </h3>
        <Accordion items={ungroupedItems} size="medium" />
      </div>

      <div
        style={{
          background: "var(--color-background-weak)",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid var(--color-border-weak)"
        }}
      >
        <h4 style={{ margin: "0 0 1rem 0" }}>Try This:</h4>
        <ol style={{ margin: 0, paddingLeft: "1.5rem", lineHeight: 1.6 }}>
          <li>Open any item in Group A, then open another item in Group A - notice the first closes</li>
          <li>Open an item in Group B while Group A has an item open - both stay open</li>
          <li>Open both ungrouped accordions - they remain independent</li>
          <li>Mix and match to see how each group maintains its own state</li>
        </ol>
      </div>
    </div>
  );
};

export default CrossGroupExample;
