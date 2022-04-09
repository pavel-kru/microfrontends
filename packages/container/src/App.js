import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componets/Header';
import MarketingApp from './componets/MarketingApp';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
