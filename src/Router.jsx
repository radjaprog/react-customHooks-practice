import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
