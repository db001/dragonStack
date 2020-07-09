import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class AuthForm extends Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        return (
            <div>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        placeholder="User Name"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                    />
                </FormGroup>
                <div>
                    <Button>Log In</Button>
                    <span> or </span>
                    <Button>Sign Up</Button>
                </div>
            </div>
        )
    }
}

export default AuthForm;