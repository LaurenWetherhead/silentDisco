import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

import './DiscoParty.css';

class DiscoPartyHostDashboard extends Component {

    render() {
         return (
        <div className="DiscoParty">
                <label> Welcom to Silent Disco!</label>
                <p>  Your party code is: {this.props.location.state.code}.
                    Let your guests know! </p>

        </div>
  );
}

}

export default DiscoPartyHostDashboard;