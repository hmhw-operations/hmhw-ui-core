export type Size = "x-small" | "small" | "medium" | "large" | "x-large";

export type LabelPosition = "left" | "right" | "top" | "none";

export type FieldType = "number" | "text" | "password" | "email" | "tel" | "url" | "file";

export type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time" | "file";

export type BaseComponentProps = {
  id: string;
  title: string;
  name?: string;
  key?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  tabIndex?: number;
};
