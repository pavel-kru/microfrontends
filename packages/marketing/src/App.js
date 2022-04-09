import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassname = createGenerateClassName({ productionPrefix: 'ma' });

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
// testing workflow
export default App;
