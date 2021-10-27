import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entry from "./Entry";
import RoomProvider from "./Providers/RoomProvider";
import Room from "./Room";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/:roomId"
          component={() => (
            <RoomProvider>
              <Room />
            </RoomProvider>
          )}
        />
        <Route path="/" exact component={Entry} />
      </Switch>
    </Router>
  );
};

export default Routes;
