import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Catalogue from '../Catalogue/Catalogue';
import ProductPage from '../ProductPage/ProductPage';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header />
          <Route path='/' exact component={Home} />
          <Switch>
            <Route path='/:type([a-z]+)' exact component={Catalogue} />
            <Route path='/:type([a-z]+)/product=:id([0-9]+)' exact component={ProductPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
