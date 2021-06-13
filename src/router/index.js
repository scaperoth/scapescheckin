import React from 'react';
import { Router as PlatformRouter, Route } from "./react-router";
import {Home, NewDailyEntry} from '../pages';
import { View } from 'react-native';

const Router = () => (
    <PlatformRouter>
        <Route exact path="/" component={Home} />
        <Route path="/dailyEntry/new" component={NewDailyEntry} />
    </PlatformRouter>
  );

  export default Router;