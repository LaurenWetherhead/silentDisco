import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

import './DiscoParty.css';

function DiscoParty() {
    return (
        <div className="DiscoParty">
                <label> Welcom to Silent Disco Party {this.props.location.state.code}! </label>


        </div>
  );
}

export default DiscoParty;