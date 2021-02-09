import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homescreen from "./Screens/Home/home";
import Footer from "./Components/Footer/footer";
import Signupnew from "./Components/Auth/Registrationform";
import Forgot from "./Components/Auth/forgot";
import PasswordVerification from "./Components/Auth/PasswordVerification";
import Profile from "./Components/Dashboard/Profile";

function App({ dispatch }) {
  console.log("home props:", dispatch);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homescreen} />
        <Route exact path="/registrationform" component={Signupnew} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/register/verified/:code"
          component={PasswordVerification}
        />
      </Switch>
    </>
  );
}

export default App;
