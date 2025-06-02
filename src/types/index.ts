export type Size = "small" | "medium" | "large" | "x-large";

export type LabelPosition = "left" | "right" | "top" | "none";

export type FieldType =
  | "number"
  | "text"
  | "password"
  | "email"
  | "tel"
  | "url";

export type BaseComponentProps = {
  id: string;
  title: string;
  name?: string;
  key?: string;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
};
