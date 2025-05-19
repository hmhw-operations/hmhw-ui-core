import React from "react";
import SidePanel from "../SidePanel";
import { Button } from "../../button";

const Example = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Button id="trigger" text="Trigger panel" title={"trigger"} onClick={() => setOpen(!open)} />
      <SidePanel
        id={"panel-component"}
        title={"panel-component"}
        side="left"
        size="large"
        titleComponent={<div>Panel Title</div>}
        open={open}
        children={<div>Panel Content</div>}
        onClose={() => setOpen(false)}
        actions={[
          { label: "Action 1", buttonVariant: "primary", onClick: () => console.log("Action 1 clicked") },
          { label: "Action 2", buttonVariant: "secondary", onClick: () => console.log("Action 2 clicked") },
        ]}
      />
    </div>
  );
};

export default Example;
