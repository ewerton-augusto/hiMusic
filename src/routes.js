import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Search from './pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/search' component={Search} />
        {/*<Route path='*' component={NotFound} />*/}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;