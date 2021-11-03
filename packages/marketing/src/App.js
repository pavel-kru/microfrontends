import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div>
      <StylesProvider>
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
// test
export default App;
