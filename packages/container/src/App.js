import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componets/Header';
import MarketingApp from './componets/MarketingApp';

const generateClassname = createGenerateClassName({
  productionPrefix: 'con',
});

const App = () => (
  <StylesProvider generateClassName={generateClassname}>
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
