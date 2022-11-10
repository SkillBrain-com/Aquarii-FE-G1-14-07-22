import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const changeEmail = (event) => setEmail(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);

  const { user, setIsLoggedIn } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === user.email && password === user.password) {
      console.log("Running?");
      setIsLoggedIn(true);
      history.push("/dashboard");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Email </label>
        <input type="text" onChange={changeEmail} value={email} />
        <label> Password </label>
        <input type="password" onChange={changePassword} value={password} />
        <button type="submit"> Login </button>
        {errorMessage ? <p> {errorMessage} </p> : null}
      </form>
    </div>
  );
};
