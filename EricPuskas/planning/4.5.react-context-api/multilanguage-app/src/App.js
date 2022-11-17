import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseLine from "@mui/material/CssBaseline";

/**
 * Component Imports
 */
import { Router } from "./components/Router";

/**
 * Imports component specific css
 */
import "./App.css";

/**
 * Displays the component
 */
export const App = () => {
  return (
    <Fragment>
      <CssBaseLine />
      <Router />
    </Fragment>
  );
};
