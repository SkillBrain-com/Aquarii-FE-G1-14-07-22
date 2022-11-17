/**
 * External Imports
 */
import { BrowserRouter } from "react-router-dom";

/**
 *  Imports components
 */
import { Routes } from "../Routes";
import { Providers } from "../Providers";

/**
 * Displays the component
 */
export const Router = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
    </BrowserRouter>
  );
};
