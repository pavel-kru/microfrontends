import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassname = createGenerateClassName({ productionPrefix: 'ma' });

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' render={() => <Pricing />} />
            <Route path='/' render={() => <Landing />} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
