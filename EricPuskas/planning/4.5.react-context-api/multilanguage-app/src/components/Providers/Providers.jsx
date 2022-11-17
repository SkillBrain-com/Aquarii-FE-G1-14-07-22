/**
 * Imports providers
 */
import { LanguageProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers = (props) => {
  const { children } = props;

  return <LanguageProvider>{children}</LanguageProvider>;
};
