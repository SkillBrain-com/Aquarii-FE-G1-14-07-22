import { Fragment } from "react";
import { useHistory } from "react-router-dom";

export const LandingPage = () => {
  const history = useHistory();

  const onLoginClick = () => history.push("/login");
  const onRegisterClick = () => history.push("/register");

  return (
    <Fragment>
      <h1> Landing page !</h1>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onRegisterClick}>Register</button>
    </Fragment>
  );
};
