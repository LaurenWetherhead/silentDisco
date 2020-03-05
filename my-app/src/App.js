import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import logo from './logo.svg';
import { db } from './firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import DiscoParty from './components/DiscoParty'
import Home from './components/Home'
import SpotifyLogin from './components/SpotifyLogin'
import DiscoPartyHostDashboard from './components/DiscoPartyHostDashboard'

function App() {

  return (
        <main>
            <Switch>
                <Route path="/" component={SpotifyLogin} exact />
                <Route path="/DiscoParty" component={DiscoParty}/>
                <Route path="/Home" component={Home}/>
                <Route path="/DiscoPartyHostDashboard" component={DiscoPartyHostDashboard}/>
            </Switch>
        </main>
  );
}

export default App;

