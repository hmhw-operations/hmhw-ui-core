export type Size = "x-small" | "small" | "medium" | "large" | "x-large";

export type LabelPosition = "left" | "right" | "top" | "none";

export type FieldType = "number" | "text" | "password" | "email" | "tel" | "url" | "file";

export type Status = "neutral" | "caution" | "warning" | "critical" | "success" | "info" | "accent";

export const SIZE_OPTIONS = ["x-small", "small", "medium", "large"] as const;
export type Size2 = (typeof SIZE_OPTIONS)[number];

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
