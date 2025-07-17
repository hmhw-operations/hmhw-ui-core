import React, { FC } from "react";
import { Toaster, toast } from "../";
import { Button } from "../../button";
import { TextLink } from "../../textlink";
import { Select } from "../../select";
import { Checkbox } from "../../checkbox";
import { Input } from "../../input";
import { ToastPosition, ToastType } from "../Toast";

const Example: FC = () => {
  const [type, setType] = React.useState<ToastType>("info");
  const [weak, setWeak] = React.useState(false);
  const [title, setTitle] = React.useState("I am a toast title");
  const [position, setPosition] = React.useState<ToastPosition>("bottom-left");

  return (
    <>
      <Toaster />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "4rem",
          color: "var(--color-foreground-primary)"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "1rem", border: "1px solid var(--color-border-accent)", borderRadius: "0.5rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "end" }}>
            <Input id="input-toast-title" label="Toast Title" title="Enter toast title" placeholder="Enter toast title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <Select
              id="select-toast-type"
              onChange={(e) => setType(e.target.value as ToastType)}
              value={type}
              label="Toast Type"
              title="Select toast type"
              options={[
                { value: "info", text: "Info" },
                { value: "success", text: "Success" },
                { value: "critical", text: "Critical" },
                { value: "warning", text: "Warning" },
                { value: "caution", text: "Caution" }
              ]}
            />

            <Checkbox
              id="checkbox-weak"
              label="Weak"
              onChange={(e) => setWeak(e.target.checked)}
              name="weak"
              size="medium"
              title="Enable weak toast"
              value={undefined}
              checked={weak}
            />

            <Select
              id="select-toast-position"
              onChange={(e) => setPosition(e.target.value as ToastPosition)}
              value={position}
              label="Toast Position"
              title="Select toast position"
              options={[
                { value: "top-right", text: "Top Right" },
                { value: "top-left", text: "Top Left" },
                { value: "bottom-right", text: "Bottom Right" },
                { value: "bottom-left", text: "Bottom Left" },
                { value: "top-center", text: "Top Center" },
                { value: "bottom-center", text: "Bottom Center" }
              ]}
            />
          </div>
          <Button
            id="toast"
            text="Press for toast"
            title="Toast!"
            onClick={() => {
              toast({
                title: title,
                weak: weak,
                onClose: () => console.log("Closed"),
                type: type,
                position: position
              });
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
            <TextLink href="https://sonner.emilkowal.ski/toast" text="Sonner Documentation" newTab />
            <p>
              The toast component logic runs using the Sonner library. Place the <code>Toaster</code> component at the root of your application, then call the <code>toast</code>{" "}
              function to display a toast.
            </p>
          </div>
          <p>
            HMHW-UI-CORE exposes pre-styled toast notifications. Please refer to the Sonner documentation for more information on how to call and customize the toast notifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Example;
