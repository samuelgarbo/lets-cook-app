import React from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Route, Switch } from "react-router-dom";

function App(props) {
  const [auth, setAuth] = React.useState(true);

  return (
    <Switch>
      <Route exact path="/" render={()=><Home auth={auth} setAuth={setAuth}/>} />
      <Route exact path="/signup" render={()=><SignUp auth={auth} setAuth={setAuth}/>} />
      <Route exact path="/signin" render={()=><SignIn auth={auth} setAuth={setAuth}/>} />
    </Switch>
  );
}

export default App;
