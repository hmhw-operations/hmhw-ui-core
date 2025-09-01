import type { Meta, StoryObj } from "@storybook/react";

import SidePanel from "../SidePanel";
import { Button } from "../../button";

const meta: Meta<typeof SidePanel> = {
  title: "SidePanel",
  component: SidePanel
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  args: {
    open: true,
    side: "right",
    size: "large",
    id: "sidepanel-composable",
    title: "Composable Side Panel",
    children: (
      <>
        <SidePanel.Header onClose={() => console.log("onClose")}>Panel Title</SidePanel.Header>
        <SidePanel.Content>
          <p>This is the content of the side panel using the composable API.</p>
          <p>You can add any content here, such as forms, lists, or other components.</p>
          <p>The composable approach gives you full control over the layout.</p>
        </SidePanel.Content>
        <SidePanel.Footer>
          <Button variant="secondary" onClick={() => console.log("Cancel clicked")} id="cancel-btn" title="Cancel" text="Cancel" />
          <Button variant="primary" onClick={() => console.log("Save clicked")} id="save-btn" title="Save" text="Save" />
        </SidePanel.Footer>
      </>
    )
  }
};

export const WithCustomHeader: Story = {
  args: {
    open: true,
    side: "right",
    size: "medium",
    id: "sidepanel-custom-header",
    title: "Custom Header Side Panel",
    children: (
      <>
        <SidePanel.Header onClose={() => console.log("onClose")}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🔧</span>
            <h2 style={{ margin: 0 }}>Settings</h2>
          </div>
        </SidePanel.Header>
        <SidePanel.Content>
          <p>This panel has a custom header without a close button.</p>
          <p>You have full control over the header content.</p>
        </SidePanel.Content>
        <SidePanel.Footer>
          <Button variant="primary" onClick={() => console.log("Close clicked")} id="close-btn" title="Close" text="Close" />
        </SidePanel.Footer>
      </>
    )
  }
};

export const ContentOnly: Story = {
  args: {
    open: true,
    side: "left",
    size: "small",
    id: "sidepanel-content-only",
    title: "Content Only Side Panel",
    children: (
      <SidePanel.Content>
        <h3>Just Content</h3>
        <p>This side panel only has content - no header or footer.</p>
        <p>You can compose the panel exactly how you need it.</p>
      </SidePanel.Content>
    )
  }
};

export const FlexibleLayout: Story = {
  args: {
    open: true,
    side: "right",
    size: "large",
    id: "sidepanel-flexible",
    title: "Flexible Layout Side Panel",
    children: (
      <>
        <SidePanel.Header onClose={() => console.log("onClose")}>Multi-section Panel</SidePanel.Header>
        <SidePanel.Content>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", height: "100%" }}>
            <section>
              <h4>Section 1</h4>
              <p>First section of content.</p>
            </section>
            <section style={{ flex: 1 }}>
              <h4>Section 2</h4>
              <p>This section grows to fill available space.</p>
            </section>
            <section>
              <h4>Section 3</h4>
              <p>Final section of content.</p>
            </section>
          </div>
        </SidePanel.Content>
        <SidePanel.Footer>
          <div style={{ display: "flex", gap: "8px", justifyContent: "space-between", width: "100%" }}>
            <Button variant="tertiary" onClick={() => console.log("Reset clicked")} id="reset-btn" title="Reset" text="Reset" />
            <div style={{ display: "flex", gap: "8px" }}>
              <Button variant="secondary" onClick={() => console.log("Cancel clicked")} id="cancel-btn-2" title="Cancel" text="Cancel" />
              <Button variant="primary" onClick={() => console.log("Apply clicked")} id="apply-btn" title="Apply" text="Apply" />
            </div>
          </div>
        </SidePanel.Footer>
      </>
    )
  }
};
