import React, { useState } from "react";
import Modal, { ActionType } from "../Modal";

const mockActions: ActionType[] = [
  { label: "Save", buttonVariant: "primary", onClick: () => {} },
  { label: "Close", buttonVariant: "secondary", onClick: () => {} },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <button onClick={() => setOpen(true)}>Click to open</button>
      <Modal open={open} onClose={() => setOpen(false)} actions={mockActions} title={"Prop title"}>
        Here is the content
      </Modal>
    </div>
  );
};

export default Example;
