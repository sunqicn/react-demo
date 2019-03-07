import React, { Component } from 'react';
import {Button,Alert} from 'react-bootstrap';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Button />
                {
                    [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                      ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                          This is a {variant} alert—check it out!
                        </Alert>
                      ))
                }
            </div>
        )
    }
}
