import { createContext } from "react";

export const defaultValues = {
  user: {}
};

export const context = createContext(defaultValues);
