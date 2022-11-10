import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { RegisterPage } from "./components/RegisterPage";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/DashboardPage";
import { UserProvider } from "./hooks/useUser/Provider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
