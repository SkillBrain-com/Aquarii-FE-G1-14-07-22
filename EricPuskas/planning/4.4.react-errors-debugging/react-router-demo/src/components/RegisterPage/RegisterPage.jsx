import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const RegisterPage = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const history = useHistory();

  const { setUser } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value
    };

    setUser(user);

    console.log({ user });
    history.push("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name </label>
        <input type="text" ref={inputNameRef} />
        <label> Email </label>
        <input type="email" ref={inputEmailRef} />
        <label> Password </label>
        <input type="password" ref={inputPasswordRef} />
        <button type="submit"> Sign up!</button>
      </form>
    </div>
  );
};
