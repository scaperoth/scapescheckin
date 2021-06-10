import React from 'react';
import { Router as PlatformRouter, Route } from "./react-router";
import Home from "../pages/Home";

const Router = ({children}) => (
    <PlatformRouter>
        {children}
        <Route exact path="/" component={Home} />
    </PlatformRouter>
  );

  export default Router;