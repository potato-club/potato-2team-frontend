import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./components/login/pages/LoginPage.jsx";
import mainPage from "./components/home/homeMain";
import RegisterPage from "./components/login/pages/RegisterPage.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/main" component={mainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
