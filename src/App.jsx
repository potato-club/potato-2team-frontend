import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./components/login/loginMain";
import mainPage from "./components/home/homeMain";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/main" component={mainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
