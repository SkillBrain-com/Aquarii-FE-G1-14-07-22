import { useState } from "react";
import { context, defaultValues } from "./Context";

export const UserProvider = (props) => {
  const { children } = props;
  const { Provider } = context;

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const providerValues = {
    ...defaultValues,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn
  };

  return <Provider value={providerValues}>{children}</Provider>;
};
