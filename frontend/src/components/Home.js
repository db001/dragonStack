import React, { Component } from 'react';
import Generation from './Generation';
import Dragon from './Dragon';

class Home extends Component {
    render() {
        return (
            <div className="rootWrapper">
                <Generation />
                <Dragon />
            </div>
        );
    }
}

export default Home;