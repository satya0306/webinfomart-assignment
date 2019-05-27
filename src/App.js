import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Merchant from './container/Merchant/Merchant';
import MerchantDetails from './components/MerchantDetails/MerchantDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Merchant}/>
        <Route path="/merchant-details" component={MerchantDetails}/>
      </Switch>
    </div>
  );
}

export default App;