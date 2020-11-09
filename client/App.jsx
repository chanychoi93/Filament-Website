import React from "React";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.jsx";
import Info from "./components/Info.jsx";
import Demo from "./components/Demo.jsx";
import OfflineMode from "./components/OfflineMode.jsx";
import Team from "./components/Team.jsx";

const App = () => {
  <div className='App'>
    <LandingPage />
    <Switch>
      <Route path='/info' component={Info} />
      <Route path='/demo' component={Demo} />
      <Route path='/offline' component={OfflineMode} />
      <Route path='/team' component={Team} />
    </Switch>
  </div>;
};

export default App;
