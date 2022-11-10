import { useContext } from "react";
import { context } from "./Context";
import { UserProvider } from "./Provider";

const useUser = () => useContext(context);

export { useUser, UserProvider };
