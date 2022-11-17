import { createContext } from "react";

/**
 * Defines the default values
 */
export const defaultValues = {
  activeLanguage: "en_en",
  languages: [],
  getLanguageOptions: () => [],
  setActiveLanguage: () => {},
  changeLanguage: () => {}
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext(defaultValues);
