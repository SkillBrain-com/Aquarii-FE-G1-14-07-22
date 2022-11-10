import { Redirect } from "react-router-dom";
import { useUser } from "../../hooks";

export const DashboardPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useUser();

  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Dashboard Page </h1>
      <button onClick={handleLogout}> Log out </button>
    </div>
  );
};
