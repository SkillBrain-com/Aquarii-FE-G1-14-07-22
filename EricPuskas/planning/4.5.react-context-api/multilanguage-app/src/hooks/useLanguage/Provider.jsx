import React from "react";

/**
 * Imports i18n
 */
import i18n from "../../i18n";

/**
 * Imports the context
 */
import { context } from "./Context";
import { I18nextProvider } from "react-i18next";

/**
 * Imports hooks
 */
import { useTranslation, useLocalStorage } from "..";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const LanguageProvider = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Defines the default language
   */
  const defaultLng = i18n.language;

  /**
   * Gets the translator
   */
  const { t } = useTranslation();

  /**
   * Initializes the active theme
   */
  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "i18nextLng",
    defaultLng
  );

  /**
   * Handles changing the languageKey key
   */
  const changeLanguage = (languageKey) => {
    setActiveLanguage(languageKey);
    i18n.changeLanguage(languageKey);
  };

  /**
   * Returns the language options
   */
  const getLanguageOptions = () => {
    return [
      { label: t("English"), value: "en_en" },
      { label: t("Romanian"), value: "en_ro" },
      { label: t("Hungarian"), value: "en_hu" }
    ];
  };

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue = {
    activeLanguage: activeLanguage || "en_en",
    getLanguageOptions,
    changeLanguage,
    setActiveLanguage,
    languages: ["en_en", "en_ro"]
  };

  return (
    <Provider value={providerValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
  );
};
