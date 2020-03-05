import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import logo from '../logo.svg';
import { db, fbauth } from '../firebase';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './Home.css';


function Home() {
  const history = useHistory();

  async function signIn() {
    fbauth.signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    // ...
    });
    }

  async function createPartyCode() {
    var i;
    var a = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var noUniqueCode = true;
    signIn()

    while (noUniqueCode) {
      a = "";
      //create a random room code
      for (i = 0; i < 5; i++) {
        a += possible[parseInt(Math.random() * 36)];
      }
      db.settings({
        timestampsInSnapshots: true
      });
      //check if that room code already exists
      var usersRef = db.collection("rooms").doc(a);

      await usersRef.get().then(function(doc) {
        if (doc.exists) {
            alert("a exists");
          } else {
            noUniqueCode = false;
            db.collection("rooms").doc(a).set({name: "San Francisco"});
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
    history.push({
        pathname: '/DiscoPartyHostDashboard',
        state: { code: a }});
  }

  async function joinParty() {
    //check if code is valid
    var partyCodeInput = document.getElementById('party_code');
    var partyCode = "";
    signIn()
    if (partyCodeInput != null) {
      partyCode = partyCodeInput.value;
    }
    //check if that room code already exists
    var roomDNE = false;
    var usersRef = db.collection("rooms").doc(partyCode);
    await usersRef.get().then(function(doc) {
        if (doc.exists) {
            //not sure what we want to store about joining members
            db.collection("rooms").doc(partyCode.set({name: "San Francisco", dancers: "newdancers!"}));
          } else {
            roomDNE = true;
            alert("This party does not exist. Try again.");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
        });
    if (!roomDNE) {
        history.push({
        pathname: '/DiscoParty',
        state: { code: partyCode }});
      }
  }

  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <form>
                <label className="PartyCodeLabel">
                    Enter a party code:
                </label>
                <input type="text" name="a" id='party_code'></input>
                <Button onClick={joinParty}> Join! </Button>
            </form>
            <div className="Buttons">
                <Button onClick={createPartyCode} variant="outline-primary"> Start A Party </Button>
            </div>
          </header>
        </div>
  );

}

export default Home;