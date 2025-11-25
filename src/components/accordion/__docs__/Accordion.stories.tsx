import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import CrossGroupExample from "./CrossGroupExample";
import PracticalExample from "./PracticalExample";
import { AccordionItem } from "../Accordion";
import React from "react";

const MockComponent: React.FC<{ text: string; variant?: string }> = ({ text, variant = "default" }) => (
  <div style={{ padding: variant === "rich" ? "1rem" : "0.5rem" }}>
    {variant === "rich" ? (
      <div>
        <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--color-system-info-default)" }}>Rich Content Example</h4>
        <p style={{ margin: "0 0 1rem 0", lineHeight: 1.6 }}>{text}</p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button style={{ padding: "0.25rem 0.5rem", border: "1px solid var(--color-border-default)", borderRadius: "4px", background: "var(--color-background-default)" }}>
            Action 1
          </button>
          <button style={{ padding: "0.25rem 0.5rem", border: "1px solid var(--color-border-default)", borderRadius: "4px", background: "var(--color-background-default)" }}>
            Action 2
          </button>
        </div>
      </div>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const basicItems: AccordionItem[] = [
  {
    label: "Getting Started",
    content: <MockComponent text="Welcome to the accordion component! This is a basic example showing how accordion items work independently when no groupId is specified." />
  },
  {
    label: "Configuration",
    content: <MockComponent text="Configure your accordion by passing items array with label and content properties. You can also specify size and groupId props." />
  },
  {
    label: "Advanced Usage",
    content: <MockComponent text="For advanced scenarios, use groupId to control which accordions work together, ensuring only one item in a group is open at a time." />
  }
];

const groupedItems1: AccordionItem[] = [
  {
    label: "Section A.1",
    content: <MockComponent text="This accordion is part of Group A. Only one item in this group can be open at a time." />
  },
  {
    label: "Section A.2",
    content: <MockComponent text="When you open this item, Section A.1 will automatically close because they share the same groupId." />
  },
  {
    label: "Section A.3",
    content: <MockComponent text="This demonstrates exclusive accordion behavior within a group." variant="rich" />
  }
];

const faqItems: AccordionItem[] = [
  {
    label: "What is an accordion component?",
    content: (
      <MockComponent text="An accordion is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It's useful for organizing content in a compact, user-friendly way." />
    )
  },
  {
    label: "How do groups work?",
    content: (
      <MockComponent text="Groups allow you to control the behavior of multiple accordion sections. When accordions share the same groupId, only one can be open at a time - opening one will close others in the same group." />
    )
  },
  {
    label: "Can I have multiple groups?",
    content: (
      <MockComponent text="Yes! You can have multiple independent groups on the same page. Each group operates independently, so you can have one item open in Group A and one item open in Group B simultaneously." />
    )
  },
  {
    label: "What about ungrouped accordions?",
    content: (
      <MockComponent text="Accordions without a groupId operate independently. Multiple ungrouped accordions can be open at the same time, giving users full control over what content they want to view." />
    )
  }
];

const meta: Meta<typeof Example> = {
  title: "Accordion",
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    items: basicItems,
    size: "medium"
  }
};

export const GroupedAccordion: Story = {
  args: {
    items: groupedItems1,
    size: "medium",
    groupId: "group-a"
  }
};

export const SmallGrouped: Story = {
  args: {
    items: groupedItems1,
    size: "small",
    groupId: "group-a-small"
  }
};

export const LargeGrouped: Story = {
  args: {
    items: groupedItems1,
    size: "large",
    groupId: "group-a-large"
  }
};

export const FAQExample: Story = {
  args: {
    items: faqItems,
    size: "medium",
    groupId: "faq-group"
  }
};

// Cross-group example story
export const CrossGroupInteraction: StoryObj<typeof CrossGroupExample> = {
  render: () => <CrossGroupExample />,
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates multiple accordion groups working independently on the same page. Each group maintains its own state while allowing users to interact with multiple groups simultaneously."
      }
    }
  }
};

// Practical use case example
export const PracticalSettingsExample: StoryObj<typeof PracticalExample> = {
  render: () => <PracticalExample />,
  parameters: {
    docs: {
      description: {
        story: "A real-world example showing how to use accordions in a settings dashboard, demonstrating different grouping strategies for different types of content."
      }
    }
  }
};
