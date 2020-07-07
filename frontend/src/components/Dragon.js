import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { fetchDragon } from '../actions/dragon';

class Dragon extends Component {
    render() {
        return (
            <div className="dragonWrapper">
                <DragonAvatar dragon={this.props.dragon} />
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
            </div>
        )
    }
}

export default connect(
    ({ dragon }) => ({ dragon }),
    { fetchDragon }
)(Dragon);