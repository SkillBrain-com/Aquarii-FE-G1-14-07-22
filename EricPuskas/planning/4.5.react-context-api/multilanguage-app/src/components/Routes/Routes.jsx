/**
 * External imports
 */
import { Switch, Route } from "react-router-dom";

/**
 * Imports components
 */
import { LoginPage } from "../LoginPage";
import { LandingPage } from "../LandingPage";

/**
 * Displays the component
 */
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};
