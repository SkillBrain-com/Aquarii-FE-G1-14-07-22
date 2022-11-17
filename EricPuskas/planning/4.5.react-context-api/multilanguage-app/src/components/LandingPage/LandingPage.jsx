import i18n from "../../i18n";

/**
 * Imports hooks
 */
import { t } from "i18next";
import { useLanguage } from "../../hooks";

/**
 * Displays the component
 */
export const LandingPage = () => {
  /**
   * Gets the active language
   */
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const updateLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  return (
    <div>
      <h1> Landing Page </h1>
      <div>
        <p> Active language: {activeLanguage}</p>
        <p> {t("HelloWorld")} </p>
        <div>
          <button onClick={() => updateLanguage("en_ro")}>Change to RO</button>
          <button onClick={() => updateLanguage("en_hu")}>Change to HU</button>
          <button onClick={() => updateLanguage("en_en")}>Change to EN</button>
        </div>
      </div>
    </div>
  );
};
