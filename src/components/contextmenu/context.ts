import { createContext, useContext } from "react";
import type { ContextMenuState } from "./types";

export const ContextMenuContext = createContext<ContextMenuState | null>(null);

export const useContextMenuState = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("ContextMenu components must be used within ContextMenu");
  }
  return context;
};
